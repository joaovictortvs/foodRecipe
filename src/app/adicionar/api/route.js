import { data } from "../../receitas/data"

export async function POST(request){

    const receita = await request.json()

    const lastRecipe = data.at(-1)

    const newRecipe = {
        id: lastRecipe.id + 1,
        nome: receita.name,
        categoria: receita.categoria,
        ingredientes: receita.ingredientes,
        preparo: receita.preparo
    }

    data.push(newRecipe)

    return new Response(JSON.stringify(newRecipe), {
        headers : {
            'Content-Type': "application/json"
        },
        status: 201
    })

}
