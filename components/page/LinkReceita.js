import Link from "next/link"

export default function LinkReceita({id, nome}){

    return(
        <Link href={`/receitas/${id}`} className="flex flex-col w-1/5 min-h-36 border border-colorTheme2 items-center justify-around cursor-pointer rounded-sm shadow mr-4 mb-4 p-2 ">
                <h1 className="font-bold font-mono text-xl text-center ">{nome}</h1>
                <p>Clique para aprender!</p>
        </Link>
    )

}