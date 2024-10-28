import Image from "next/image";

export default function DetailsBox() {
  return (
    <div className="w-box-details h-box-details flex flex-col justify-center items-center  px-10 py-16">
      <div className=" w-full flex justify-center items-center mb-10">
        <Image src="/assets/vetor01.svg" alt="box" width={100} height={100} />
      </div>

      <div className="w-full flex flex-col gap-3 justify-center items-center font-epilogue text-[#2D2D2D]">
        <strong className="text-xl font-semibold">
          Product Design
        </strong>
        <p className="text-base font-normal text-center">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
      </div>
    </div>
  )
}