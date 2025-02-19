import Link from "next/link"
import { data } from "../receitas/data"

import LinkReceita from "../../../components/page/LinkReceita"
import { IoArrowBackCircle } from "react-icons/io5";

export default function Salgados(){

    const dataFindCategorie = data.filter(receita=> receita.categoria == 'Salgada')

    return(
        <div className="flex flex-col items-center h-screen bg-colorTheme1">
        <div className="w-full h-1/5 flex justify-center items-center">
          <h1 className="font-mono text-4xl bg-colorTheme3 px-20 py-4 rounded-md mt-4">Melhores Receitas Regionais</h1>
        </div>
        <nav className="w-5/6 bg-colorTheme3 space-x-4 flex justify-evenly p-2 rounded-tl-xl rounded-tr-xl mt-4">
            <Link href={'/'} className="text-5xl hover:text-colorTheme2 duration-300"><IoArrowBackCircle/></Link>
            <Link href={'/doces'} className="flex-auto text-center p-2 text-lg hover:text-colorTheme2 duration-300">Doces</Link>
            <Link href={'/salgados'} className="flex-auto text-colorTheme2 text-center p-2 text-lg hover:text-colorTheme2 duration-300">Salgados</Link>
            <Link href={'/adicionar'} className="flex-auto text-center p-2 text-lg hover:text-colorTheme2 duration-300">Adicione sua receita</Link>
        </nav>
        <main className="w-5/6 bg-white h-auto text-colorTheme2 flex flex-wrap justify-center p-4">
            {dataFindCategorie.map((receita, i)=>(
                <LinkReceita id={receita.id} nome={receita.nome} key={receita.id}/>
            ))}
            {/* add as receitas  */}
        </main>
    </div>
    )

}