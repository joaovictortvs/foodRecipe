import Link from "next/link"

export default function LinkReceita({id, nome}){

    return(
        <Link href={`/receitas/${id}`} className="min-h-36 border border-colorTheme2 items-center justify-around cursor-pointer rounded-sm shadow classLinkReceita ">
                <h1 className="font-bold font-mono text-xl text-center h1LinkReceita">{nome}</h1>
                <p>Clique para aprender!</p>
        </Link>
    )

}