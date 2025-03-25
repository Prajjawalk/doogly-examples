"use client";
import { DooglyButton } from "@doogly/react";
import { ethers } from "ethers";
import { useState } from "react";

const swapRouterAbi = [
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "tokenIn", type: "address" },
          { internalType: "address", name: "tokenOut", type: "address" },
          { internalType: "uint24", name: "fee", type: "uint24" },
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "amountIn", type: "uint256" },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct IV3SwapRouter.ExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInputSingle",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH9",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];

export default function Page() {
  const [recipient, setRecipient] = useState<`0x${string}`>();

  const WETH9 = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
  const KIRANA = "0xfEC68cBF04F7C069628cF9E9c609abC95f9a476B";

  const abiInterface = new ethers.Interface(swapRouterAbi);
  console.log(recipient);
  const callData = abiInterface.encodeFunctionData("exactInputSingle", [
    {
      tokenIn: WETH9,
      tokenOut: KIRANA,
      fee: 3000, // 0.3% pool fee
      recipient: recipient ?? "0x0000000000000000000000000000000000000000",
      amountIn: 0, // Dynamically updated
      amountOutMinimum: 0,
      sqrtPriceLimitX96: 0, // Adding 0 for SqrtPriceLimit
    },
  ]);

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
      target: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45" as `0x${string}`, // Uniswap v3 router contract
      callData: callData as `0x${string}`, // Swap function call
      callType: 1, // Utlize full native token balance after bridging
      tokenAddress:
        "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270" as `0x${string}`, // WETH9 on Polygon
      inputPos: 5, // Modify amount in 5th position (0th represents struct, then 4th in seq)
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-4xl text-[#AF3BC9] mt-5">Namma Kirana</div>
        <div className="text-md text-[#AF3BC9] mt-5">
          Enter $KIRANA recipient address
        </div>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value as `0x${string}`)}
          placeholder="0x..."
          className="border-2 border-[#AF3BC9] p-2 rounded-md text-black"
        />
        <div className="text-md text-[#AF3BC9] mt-10">
          A blockchain-powered marketplace connecting local kirana/grocery
          stores directly with customers, eliminating intermediaries to ensure
          better prices, authentic products, and community growth while enabling
          transparent supply chain tracking.
        </div>
        <DooglyButton
          buttonText="Donate Now"
          modalTitle="Support Our Cause"
          apiUrl="https://api.doogly.org"
          config={{
            destinationChain: "137",
            destinationAddress:
              recipient ?? "0x0000000000000000000000000000000000000000", // Destination address (Dummy if postSwapHook is used)
            destinationOutputTokenAddress:
              "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // Output token at destination
          }}
          modalStyles={{
            backgroundColor: "#FFFFFF",
            headingColor: "#892BE2",
            buttonColor: "#892BE2",
            textColor: "#FFFFFF",
          }}
          postSwapHook={hookData} // Post swap hook to execute contract calls after swap from bridge itself
          buttonClassName="bg-purple-600 text-white border-none py-2 px-4 text-center text-lg rounded transition duration-300 ease-in-out hover:bg-purple-700"
        />
      </main>
    </div>
  );
}
