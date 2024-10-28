import Details from "@/components/details/page";
import Header from "@/components/header/page";
import { Analytics } from "@vercel/analytics/react";
export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <Analytics />
      <Header />
      <section className="w-full h-full flex flex-col justify-start items-center  p-2 lg:px-20 lg:py-6 gap-2">
        <div className="w-full h-auto flex flex-col justify-center items-center lg:flex-row">
          <div className="w-full flex flex-col text-left font-epilogue gap-6">
            <strong className="text-sm" >Bem vindo ao </strong>
            <h1 className="font-semibold text-6xl">Santa Clara Biscuit</h1>
            <p>O melhor atelier de Volta Redonda , voltado para peças de biscuit e bolos fakes</p>
            <div className="w-full flex justify-start items-start mt-3">
              <button className="w-52 h-16 bg-black text-white font-epilogue">
                <strong className="text-lg">Contato</strong>
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-5">
            <img src="/Logo_Stb.png" alt="biscuit" className="w-96 h-96 object-cover" />
          </div>
        </div>
        <Details />

      </section>
    </div>
  );
}
