"use client";

import Image from "next/image";
// import { DooglyDonateButton } from "@doogly/doogly-donate-component";

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
        {/* <div className="w-full flex justify-center">
          <DooglyDonateButton
            buttonText="Donate Now"
            modalTitle="Support Our Cause"
            apiUrl="https://api.doogly.org"
            config={{
              destinationChain: "10",
              destinationAddress: "0x264f9EF85C21DE49451c3636116668889Ca41aab",
              destinationOutputTokenAddress:
                "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
            }}
            modalStyles={{
              backgroundColor: "white",
              buttonColor: "#AF3BC9",
              textColor: "#AF3BC9",
              headingColor: "#AF3BC9",
            }}
            buttonClassName="bg-[#AF3BC9] text-white border-none py-2 px-4 text-center text-lg rounded transition duration-300 ease-in-out hover:bg-purple-700"
          />
        </div> */}
      </main>
    </div>
  );
}
