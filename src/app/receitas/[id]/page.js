'use client'
import { data } from "../data"
import { useParams } from "next/navigation"
import Link from "next/link"

import { IoArrowBackCircle } from "react-icons/io5";

export default function ReceitaId(){

    const params = useParams()

    const dataFind = data.find(receita => receita.id == params.id)

    return(
        <div className="flex flex-col items-center h-screen bg-colorTheme1">
            <nav className="w-5/6 bg-colorTheme3 space-x-4 flex justify-evenly p-2 rounded-tl-xl rounded-tr-xl mt-4">
            <Link href={'/'} className="text-5xl hover:text-colorTheme2 duration-300"><IoArrowBackCircle/></Link>
            <Link href={'/doces'} className="flex-auto text-center p-2 text-lg hover:text-colorTheme2 duration-300">Doces</Link>
            <Link href={'/salgados'} className="flex-auto text-center p-2 text-lg hover:text-colorTheme2 duration-300">Salgados</Link>
            <Link href={'/adicionar'} className="flex-auto text-center p-2 text-lg hover:text-colorTheme2 duration-300">Adicione sua receita</Link>
        </nav>
            <main className="w-5/6 bg-white h-auto text-colorTheme2 flex flex-col flex-wrap items-center p-4">
                <h1 className="text-4xl text-yellow-300 bg-colorTheme3 py-2 px-4">{dataFind.nome}</h1>
                <div className="flex w-full">
                    <div className="flex flex-col text-black space-y-2 w-3/6 border m-4 p-4">
                        <span className="text-2xl">Ingredientes:</span>
                        {dataFind.ingredientes.map((ingrediente, i)=>(
                            <p key={i}>{ingrediente}</p>
                        ))}
                    </div>
                    <div className="flex flex-col text-black space-y-2 w-3/6 border m-4 p-4"> 
                        <span className="text-2xl">Modo de preparo:</span>
                        {dataFind.preparo.map((preparo, i)=>(
                            <p key={i}>{preparo}</p>
                        ))}
                    </div>
                </div>
            </main>
        </div>    
    )

}