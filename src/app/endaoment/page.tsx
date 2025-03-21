"use client";
import { DooglyButton } from "@doogly/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const erc20Abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
const orgAbi = [
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "donate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "balance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

export default function Page() {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const provider = new ethers.JsonRpcProvider(
        "https://optimism-rpc.publicnode.com"
      );
      const orgContract = new ethers.Contract(
        "0x8D61c2adfa08381A8D89A3A47ECB5fF8D28B347D",
        orgAbi,
        provider
      );

      const baseProvider = new ethers.JsonRpcProvider(
        "https://base-rpc.publicnode.com"
      );
      const orgContractBase = new ethers.Contract(
        "0x8D61c2adfa08381A8D89A3A47ECB5fF8D28B347D",
        orgAbi,
        baseProvider
      );

      const ethProvider = new ethers.JsonRpcProvider(
        "https://ethereum-rpc.publicnode.com"
      );
      const orgContractEth = new ethers.Contract(
        "0x8D61c2adfa08381A8D89A3A47ECB5fF8D28B347D",
        orgAbi,
        ethProvider
      );

      let balanceValue = await orgContract?.balance();
      balanceValue += await orgContractBase?.balance();
      balanceValue += await orgContractEth?.balance();

      setBalance(parseInt(balanceValue?.toString()) / 1000000);
    };

    fetchBalance();
  }, []); // Added dependency array to run once on mount

  const erc20Interface = new ethers.Interface(erc20Abi);
  const approveData = erc20Interface.encodeFunctionData("approve", [
    "0x8D61c2adfa08381A8D89A3A47ECB5fF8D28B347D", // Org Contract
    ethers.MaxUint256,
  ]);
  const abiInterface = new ethers.Interface(orgAbi);
  const callData = abiInterface.encodeFunctionData("donate", [0]);

  /**
   * Post swap contract calls executed in sequence
   * @param target - contract address
   * @param callData - 0x bytes string of contract call data
   * @param callType 0 - Default, 1 - Utilise all the resulting output tokens after bridging + swapping, 2 - Utilize all output native tokens after bridging + swapping
   * @param tokenAddress - The token address to interact with contract
   * @param inputPos - the variable position to dynamically update with resulting amount after swap
   */
  const hookData = [
    {
      target: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85" as `0x${string}`, // USDC contract
      callData: approveData as `0x${string}`, // Approval calldata
      callType: 1, // Utlize full output token balance of swap
      tokenAddress:
        "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85" as `0x${string}`, // USDC on Optimism
      inputPos: 1, // Modify the amount in 2nd position
    },
    {
      target: "0x8D61c2adfa08381A8D89A3A47ECB5fF8D28B347D" as `0x${string}`, // Endaoment Org contract
      callData: callData as `0x${string}`, // Donate function call
      callType: 1, // Utlize full output token balance after previous function
      tokenAddress:
        "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85" as `0x${string}`, // USDC on Optimism
      inputPos: 0, // Modify amount in 1st position
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-4xl text-[#AF3BC9] mt-5">
          Los Angeles Fire Department Foundation
        </div>
        <div className="text-lg text-[#AF3BC9] mt-5">
          Crypto Donation Received: {balance}
        </div>
        <div className="text-md text-[#AF3BC9] mt-10">
          Every 35 seconds, the Los Angeles Fire Department (LAFD) responds to
          an emergency. From traffic collisions to swift water rescues, and
          stranded hikers to heart attacks, The LAFD handles an endless variety
          of urban, industrial, residential, wildland, and
          transportation-related incidents. Despite the breadth and scope of
          what the LAFD covers, its firefighters often have needs that the
          city’s budget cannot fulfill. As the LAFD’s official non-profit
          partner, the LAFD Foundation supports the Department in protecting
          life, property, and the environment by providing essential equipment,
          education, and public outreach programs to supplement city resources.
        </div>
        <DooglyButton
          buttonText="Donate Now"
          modalTitle="Support Our Cause"
          apiUrl="https://api.doogly.org"
          config={{
            destinationChain: "10",
            destinationAddress: "0x264f9EF85C21DE49451c3636116668889Ca41aab", // Destination address (Dummy if postSwapHook is used)
            destinationOutputTokenAddress:
              "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85", // Output token at destination
            initialAmount: "0.0001",
            initialChainId: "8453",
            initialToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          }}
          modalStyles={{
            backgroundColor: "#FFFFFF",
            headingColor: "#892BE2",
            buttonColor: "#892BE2",
            textColor: "white",
          }}
          // callback={console.log}
          // webhookUrl="https://google.com"
          // webHookData="abc"
          postSwapHook={hookData} // Post swap hook to execute contract calls after swap from bridge itself
          buttonClassName="bg-purple-600 text-white border-none py-2 px-4 text-center text-lg rounded transition duration-300 ease-in-out hover:bg-purple-700"
        />
      </main>
    </div>
  );
}
