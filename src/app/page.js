import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-colorTheme1">
        <div className="w-full h-1/5 flex justify-center items-center">
          <h1 className="font-mono text-4xl bg-colorTheme3 px-20 py-4 rounded-md">Melhores Receitas Regionais</h1>
        </div>
        <nav className="w-5/6 bg-colorTheme3 space-x-4 flex justify-evenly p-2 rounded-tl-xl rounded-tr-xl">
            <Link href={'/doces'} className="flex-auto text-center p-2 text-lg">Doces</Link>
            <Link href={'/salgados'} className="flex-auto text-center p-2 text-lg">Salgados</Link>
            <Link href={'/adicionar'} className="flex-auto text-center p-2 text-lg">Adicione sua receita</Link>
        </nav>
        <main className="w-5/6 bg-white min-h-96 text-colorTheme2">
            // colocar as receitas do banco de dados.
        </main>
    </div>
  );
}
