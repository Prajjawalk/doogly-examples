"use client";

import Image from "next/image";
import { DooglyButton } from "@doogly/react";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-4xl text-[#AF3BC9] mt-10">Try out Doogly</div>
        <div className="w-full flex justify-center">
          <Image
            src="/doogly-mascot.png"
            alt="Success"
            className="my-10 flex items-center justify-center"
            width={200}
            height={200}
          />
        </div>
        <div className="w-full flex justify-center">
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
                target: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
                callData:
                  "0x095ea7b3000000000000000000000000a238dd80c259a72e81d7e4664a9801593f98d1c5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                callType: 1,
                tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
                inputPos: 1,
              },
              {
                target: "0xA238Dd80C259a72e81d7e4664a9801593F98d1c5",
                callData:
                  "0x617ba037000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda029130000000000000000000000000000000000000000000000000000000000000000000000000000000000000000deadbeef1234567890abcdef1234567890abcdef0000000000000000000000000000000000000000000000000000000000000000",
                callType: 1,
                tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
                inputPos: 1,
              },
            ]}
            modalStyles={{
              backgroundColor: "#FFFFFF",
              buttonColor: "#AF3BC9",
              textColor: "#AF3BC9",
              headingColor: "#AF3BC9",
            }}
          />
        </div>
      </main>
    </div>
  );
}
