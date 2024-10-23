import Header from "@/components/header/page";
import { Analytics } from "@vercel/analytics/react";
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Analytics />
      <Header />
      <div className="w-full flex justify-center items-center Mobile: flex-col">
        <div className="w-1/2 flex flex-col justify-center items-center px-10 py-6 Mobile:w-full">
          <div className="w-full flex flex-col text-left font-epilogue gap-6">
            <strong className="text-sm" >Bem vindo ao </strong>
            <h1 className="font-semibold text-6xl">Santa Clara Biscuit</h1>
            <p>O melhor atelier de Volta Redonda , voltado para peças de biscuit e bolos fakes</p>
          </div>
          <div className="w-full flex justify-start items-start mt-3">
            <button className="w-52 h-16 bg-black text-white font-epilogue">
              <strong className="text-lg">Contato</strong>
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center Mobile:w-full">
          <img src="/Logo_Stb.png" alt="biscuit" className="w-96 h-96 object-cover" />
        </div>

      </div>
    </div>
  );
}
