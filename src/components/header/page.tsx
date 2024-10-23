import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-10 flex justify-between items-center px-10 absolute top-0 mb-5">
      <div className="w-1/2 flex justify-start items-start">
        <Image src="/logotipo.png" alt="logo" width={60} height={60} />
      </div>
      <div className="flex w-1/2 justify-end items-end">
        <ul className="w-52 h-7 flex justify-center items-center gap-6 font-epilogue font-normal">
          <li>About</li>
          <li>Contact</li>
          <li>Work</li>
        </ul>
      </div>
    </div>
  )
}