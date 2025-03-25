"use client";
import { DooglyButton } from "@doogly/react";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-2xl text-[#AF3BC9] mt-5">
          Earn 4.83% on USDC with Arcadia
        </div>
        <div className="text-md text-[#AF3BC9] mt-5">
          Pay with any token, any chain and all funds and bridged and deposited
          as USDC on Arcadia contract deployed on Base. Deposited funds earn
          passive yield by providing liquidity for margin accounts
        </div>
        <div className="text-md text-[#AF3BC9] mt-1">
          For more details, checkout Arcadia Protocol -
          https://arcadia.finance/pool/8453/0x3ec4a293Fb906DD2Cd440c20dECB250DeF141dF1
        </div>

        <DooglyButton
          // Checkout button text to trigger modal
          buttonText="Checkout"
          // Add tailwind css classname for the checkout button
          buttonClassName="bg-purple-600 text-white border-none py-2 px-4 text-center text-lg rounded transition duration-300 ease-in-out hover:bg-purple-700"
          modalTitle="Checkout with Doogly"
          apiUrl="https://api.doogly.org"
          config={{
            destinationChain: "8453",
            destinationAddress: "0xA968ded9904E0fcB878fa8A0621227BC676e58Fe",
            destinationOutputTokenAddress:
              "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
          }}
          postSwapHook={[
            {
              target: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
              callData:
                "0x095ea7b3000000000000000000000000816f722424b49cf1275cc86da9840fbd5a6167e9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
              callType: 1,
              tokenAddress: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
              inputPos: 1,
            },
            {
              target: "0x816f722424B49Cf1275cc86DA9840Fbd5a6167e9",
              callData:
                "0x322dda6d60011da880c5627260390a9e41a56f33716994704d70bf52d91bd95ac27f7c788fb348d1dfa1b324b2fb90a824b5dcd1280788285e8b87217f4c3f2a7387ba08d6aca1be9729c13d677335161321649cccae6a591554772516700f986f942eaa0000000000000000000000000000000000000000000000000000000000000000",
              callType: 1,
              tokenAddress: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
              inputPos: 3,
            },
          ]}
          modalStyles={{
            backgroundColor: "#FFFFFF",
            buttonColor: "#AF3BC9",
            textColor: "#FFFFFF",
            headingColor: "#AF3BC9",
          }}
        />
      </main>
    </div>
  );
}
