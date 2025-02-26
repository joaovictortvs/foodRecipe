'use client'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { data } from '../receitas/data'

import LinkReceita from '../../../components/page/LinkReceita'
import { FiSearch } from 'react-icons/fi'

export default function Pesquisar(){
    const router = useRouter()
    const pathname = usePathname()
    
    const [dadoBusca, setDadoBusca] = useState('')
    const [resultadoBusca, setResultadoBusca] = useState([])

    const enviarPesquisa=(e)=>{
        if(e.key === 'Enter' || e.type === 'click'){
            const url = `${pathname}?nome=${encodeURIComponent(dadoBusca)}`
            router.push(url)
            PesquisarReceita()
        }
    }

    function PesquisarReceita(){
        // Método para retornar a receita pesquisada

       const filteredRecipes = dadoBusca ? data.filter(receita=> receita.nome.includes(dadoBusca) ): data

        setResultadoBusca(filteredRecipes)

    }

    return(
        <div className="flex flex-col items-center h-screen bg-colorTheme1">
        <div className="w-full h-1/5 flex justify-center items-center">
          <h1 className="font-mono text-4xl bg-colorTheme3 px-20 py-4 rounded-md mt-4">Melhores Receitas Regionais</h1>
        </div>
        <nav className="w-5/6 bg-colorTheme3 space-x-4 flex justify-evenly p-2 rounded-tl-xl rounded-tr-xl mt-4">
            <Link href={'/doces'} className="flex-auto text-center p-2 text-lg hover:text-colorTheme2 duration-300">Doces</Link>
            <Link href={'/salgados'} className="flex-auto text-center p-2 text-lg hover:text-colorTheme2 duration-300">Salgados</Link>
            <Link href={'/adicionar'} className="flex-auto text-center p-2 text-lg hover:text-colorTheme2 duration-300">Adicione sua receita</Link>
        
        </nav>
        <main className="w-5/6 bg-white h-auto text-colorTheme2 flex flex-col items-center p-4">
            <h1 className='text-lg'>Pesquise pela sua receita preferida!</h1>
            <div className='w-full flex justify-center mt-1 mb-5'>
                <div className='flex bg-gray-100 items-center space-x-1 w-5/6 px-2 rounded-xl'>
                    <input type='text' placeholder='Digite o nome da receita! (Inicie com letra maiúscula)' className='bg-gray-100 px-4 py-3 flex-auto focus:outline-none text-lg' onChange={(e)=>{setDadoBusca(e.target.value)}} onKeyDown={enviarPesquisa}/>
                    <FiSearch className='text-2xl cursor-pointer' onClick={enviarPesquisa}/>
                </div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <h1 className='text-colorTheme2 opacity-65'>Resultados</h1>
                <div className='w-5/6 h-auto text-colorTheme2 flex flex-wrap justify-center p-4'>
                    {/* resultados da pesquisa da receita */}
                    {resultadoBusca.map((receita)=>(
                        <LinkReceita nome={receita.nome} id={receita.id} key={receita.id}/>
                    ))}
                </div>
            </div>
        </main>
    </div>
    )

}