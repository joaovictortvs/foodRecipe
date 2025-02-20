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

// {
//     id: 40,
//     nome: 'Quindim',
//     categoria: 'Doce',
//     ingredientes: [
//         "Gemas 6 unidades",
//         "Açúcar 1 xícara",
//         "Coco ralado 100g",
//         "Manteiga 1 colher de sopa"
//     ],
//     preparo: [
//         "Misturar todos os ingredientes",
//         "Despejar em forminhas untadas",
//         "Assar em banho-maria a 180°C por 40 minutos",
//         "Servir frio"
//     ]
// }