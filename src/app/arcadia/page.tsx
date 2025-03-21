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
                "0x095ea7b3000000000000000000000000efe32813dba3a783059d50e5358b9e3661218dadffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
              callType: 1,
              tokenAddress: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
              inputPos: 1,
            },
            {
              target: "0xEFE32813dBA3A783059d50e5358b9e3661218daD",
              callData:
                "0x6e553f650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000deadbeef1234567890abcdef1234567890abcdef",
              callType: 1,
              tokenAddress: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
              inputPos: 0,
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
