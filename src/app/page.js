import Link from "next/link";
import { data } from "./receitas/data";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-colorTheme1">
        <div className="w-full h-1/5 flex justify-center items-center">
          <h1 className="font-mono text-4xl bg-colorTheme3 px-20 py-4 rounded-md mt-4">Melhores Receitas Regionais</h1>
        </div>
        <nav className="w-5/6 bg-colorTheme3 space-x-4 flex justify-evenly p-2 rounded-tl-xl rounded-tr-xl mt-4">
            <Link href={'/doces'} className="flex-auto text-center p-2 text-lg">Doces</Link>
            <Link href={'/salgados'} className="flex-auto text-center p-2 text-lg">Salgados</Link>
            <Link href={'/adicionar'} className="flex-auto text-center p-2 text-lg">Adicione sua receita</Link>
        </nav>
        <main className="w-5/6 bg-white h-auto text-colorTheme2 flex flex-wrap justify-center p-4">
        <div className="flex flex-col w-1/5 min-h-36 border border-colorTheme2 items-center justify-around cursor-pointer rounded-sm shadow mr-4 mb-4 p-2">
                <h1 className="font-bold font-mono text-xl text-center ">{data[0].nome}</h1>
                <p>Clique para aprender!</p>
            </div>
            {/* add as receitas  */}
        </main>
    </div>
  );
}
