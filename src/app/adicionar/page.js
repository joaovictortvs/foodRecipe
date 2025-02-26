'use client'
import Link from "next/link"

import { useEffect, useState } from "react"

import { FaPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Input from "../../../components/page/Input"

export default function Adicionar(){

    const [postReceita, setPostReceita] = useState(false)
    const [numeroInputIng, setNumeroInputIng] = useState(3)
    const [numeroInputPrep, setNumeroInputPrep] = useState(3)
    const [inputsIngredientesAdicionais, setAddInputsIngredientesAdicionais] = useState([])
    const [inputsPreparoAdicionais, setInputsPreparoAdicionais] = useState([])

    const [formReceita, setFormReceita] = useState()
    const [nomeReceita, setNomeReceita] = useState('')
    const [categoriaReceita, setCategoriaReceita] = useState('')
    const [ingredientesReceita, setIngredientesReceita] = useState([])
    const [passosReceita, setPassosReceita] = useState([])
    const [clickAdicionar, setClickAdicionar] = useState(false)

    function AdicionarInputIngrediente(){
        setAddInputsIngredientesAdicionais([...inputsIngredientesAdicionais, numeroInputIng + 1])
        setNumeroInputIng(numero=> numero + 1)
    }

    function AdicionarInputPreparo(){
        setInputsPreparoAdicionais([...inputsPreparoAdicionais, numeroInputPrep + 1])
        setNumeroInputPrep(numero=> numero + 1)
    }

    function SubmitForm(e){
        e.preventDefault()
        setClickAdicionar(true)

        const form_Receita = {
                name: nomeReceita,
                categoria: categoriaReceita,
                ingredientes: ingredientesReceita.filter((ingred)=> ingred !== ""),
                preparo: passosReceita.filter((passo)=> passo !== "")
            
        }
        setFormReceita(form_Receita)
        setPostReceita(true)
    }

    const receitaNome=(nome)=>{
        setNomeReceita(nome)
    }

    const categReceita=(categoria)=>{
        setCategoriaReceita(categoria)
    }

    const ingredReceita=(ingred)=>{
        setIngredientesReceita(prevState=>[...prevState, ingred])
    }

    const prepReceita=(passos)=>{
        setPassosReceita(prevState=>[...prevState, passos])
    }

    useEffect(()=>{
        fetch('http://localhost:3000/adicionar/api', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(formReceita)

        })
    }, [postReceita])

    return(
        <div className="flex flex-col items-center h-screen bg-colorTheme1">
        <div className="w-full h-1/5 flex justify-center items-center">
          <h1 className="font-mono text-4xl bg-colorTheme3 px-20 py-4 rounded-md mt-4">Melhores Receitas Regionais</h1>
        </div>
        <nav className="w-5/6 bg-colorTheme3 space-x-4 flex justify-evenly p-2 rounded-tl-xl rounded-tr-xl mt-4">
            <Link href={'/doces'} className="flex-auto text-center p-2 text-lg hover:text-colorTheme2 duration-300">Doces</Link>
            <Link href={'/salgados'} className="flex-auto text-center p-2 text-lg hover:text-colorTheme2 duration-300">Salgados</Link>
            <Link href={'/adicionar'} className="flex-auto text-colorTheme2 text-center p-2 text-lg hover:text-colorTheme2 duration-300">Adicione sua receita</Link>
            <Link href={'/pesquisar'} className="flex-auto text-center p-2 text-2xl hover:text-colorTheme2 duration-300"><FiSearch/></Link>
        </nav>
        <main className="w-5/6 bg-white h-auto text-colorTheme2 flex flex-wrap justify-center p-4">
            <form className="w-1/2 border h-auto flex flex-col items-center space-y-4 p-2">
                <Input type='text' text='Nome da receita:' placeholder='Digite o nome da receita' id='nomeReceita' voltarDado={receitaNome}/>
                <select id="opcoes" name="opcoes" onChange={(e)=>categReceita(e.target.value)}>
                    <option value="Salgada">Salgada</option>
                    <option value="Doce">Doce</option>
                </select>
                <Input type='text' text='Ingrediente 1:' placeholder='Ingrediente 1' id='ingred_1' voltarDado={ingredReceita} verificaEnvio={clickAdicionar}/>
                <Input type='text' text='Ingrediente 2:' placeholder='Ingrediente 2' id='ingred_2' voltarDado={ingredReceita} verificaEnvio={clickAdicionar}/>
                <Input type='text' text='Ingrediente 3:' placeholder='Ingrediente 3' id='ingred_3' voltarDado={ingredReceita} verificaEnvio={clickAdicionar}/>
                {inputsIngredientesAdicionais.map((numero, index)=>(
                    <Input type='text' text={`Ingrediente ${numero}:`} placeholder={`Ingrediente ${numero}`} id={`ingrid_${numero}`} key={numero} voltarDado={ingredReceita} verificaEnvio={clickAdicionar}/>
                ))}
                <div className="flex space-x-2 items-center cursor-pointer" onClick={AdicionarInputIngrediente}>
                        <FaPlus/> 
                        <span>Ingredientes</span>
                </div>
                <Input type='text' text='Preparo - Passo 1:' placeholder='Passo 1' id='passo_1' voltarDado={prepReceita} verificaEnvio={clickAdicionar}/>
                <Input type='text' text='Preparo - Passo 2:' placeholder='Passo 2' id='passo_2' voltarDado={prepReceita} verificaEnvio={clickAdicionar}/>
                <Input type='text' text='Preparo - Passo 3:' placeholder='Passo 3' id='passo_3' voltarDado={prepReceita} verificaEnvio={clickAdicionar}/>
                {inputsPreparoAdicionais.map((numero, index)=>(
                    <Input type='text' text={`Preparo - Passo ${numero}:`} placeholder={`Passo ${numero}`} id={`passo_${numero}`} key={numero} voltarDado={prepReceita} verificaEnvio={clickAdicionar}/>
                ))}
                <div className="flex space-x-2 items-center cursor-pointer" onClick={AdicionarInputPreparo}>
                        <FaPlus/> 
                        <span>Passos</span>
                </div>
                <button className="bg-colorTheme2 px-6 py-2 text-center text-white text-xl " onClick={SubmitForm}>Adicionar</button>
            </form>
        </main>
    </div>
    )

}