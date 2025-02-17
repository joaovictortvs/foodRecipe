const data = [
    {
        id: 1,
        nome: 'Macarronada',
        categoria: 'Salgada',
        ingredientes: [
            "Macarrão 500g",
            "Molho de tomate 340g",
            "Carne moída 300g",
            "Cebola 1 unidade"
        ],
        preparo: [
            "Cozinhar o macarrão até ficar al dente",
            "Refogar a cebola picada até dourar",
            "Adicionar a carne moída e cozinhar até dourar",
            "Acrescentar o molho de tomate e cozinhar por 10 minutos",
            "Misturar o molho com o macarrão e servir quente"
        ]
    },
    {
        id: 2,
        nome: 'Omelete',
        categoria: 'Salgada',
        ingredientes: [
            "Ovos 2 unidades",
            "Queijo 50g",
            "Sal a gosto",
            "Pimenta a gosto"
        ],
        preparo: [
            "Bater os ovos em um recipiente",
            "Adicionar sal, pimenta e queijo",
            "Aquecer uma frigideira e despejar a mistura",
            "Cozinhar até dourar dos dois lados",
            "Servir quente"
        ]
    },
    {
        id: 3,
        nome: 'Panqueca',
        categoria: 'Salgada',
        ingredientes: [
            "Farinha de trigo 1 xícara",
            "Leite 200ml",
            "Ovo 1 unidade",
            "Sal 1 pitada"
        ],
        preparo: [
            "Misturar todos os ingredientes até obter uma massa homogênea",
            "Aquecer uma frigideira untada",
            "Despejar pequenas porções da massa e espalhar",
            "Cozinhar até dourar dos dois lados",
            "Servir com recheio a gosto"
        ]
    },
    {
        id: 4,
        nome: 'Arroz de carreteiro',
        categoria: 'Salgada',
        ingredientes: [
            "Arroz 2 xícaras",
            "Carne seca 300g",
            "Cebola 1 unidade",
            "Tomate 2 unidades"
        ],
        preparo: [
            "Dessalgar e desfiar a carne seca",
            "Refogar a cebola e o tomate picados",
            "Adicionar a carne seca e o arroz",
            "Cobrir com água e cozinhar até o arroz ficar macio",
            "Servir quente"
        ]
    },
    {
        id: 5,
        nome: 'Bolo de chocolate',
        categoria: 'Doce',
        ingredientes: [
            "Farinha de trigo 2 xícaras",
            "Açúcar 1 xícara",
            "Cacau em pó 1/2 xícara",
            "Leite 200ml",
            "Ovo 2 unidades"
        ],
        preparo: [
            "Misturar os ingredientes secos em um recipiente",
            "Adicionar os ovos e o leite e misturar bem",
            "Despejar a massa em uma forma untada",
            "Assar em forno preaquecido a 180°C por 40 minutos",
            "Servir depois de esfriar"
        ]
    },
    {
        id: 6,
        nome: 'Feijoada',
        categoria: 'Salgada',
        ingredientes: [
            "Feijão preto 500g",
            "Carne seca 300g",
            "Linguiça calabresa 200g",
            "Cebola 1 unidade",
            "Alho 2 dentes"
        ],
        preparo: [
            "Deixar o feijão de molho por 12 horas",
            "Cozinhar o feijão até ficar macio",
            "Refogar a cebola e o alho",
            "Adicionar as carnes e deixar cozinhar",
            "Misturar tudo e cozinhar por mais 20 minutos"
        ]
    },
    {
        id: 7,
        nome: 'Lasanha',
        categoria: 'Salgada',
        ingredientes: [
            "Massa para lasanha 500g",
            "Molho de tomate 500g",
            "Carne moída 300g",
            "Queijo mussarela 300g",
            "Presunto 200g"
        ],
        preparo: [
            "Preparar um molho com carne moída e molho de tomate",
            "Intercalar camadas de massa, molho, queijo e presunto",
            "Repetir as camadas até preencher a forma",
            "Levar ao forno a 180°C por 40 minutos",
            "Servir quente"
        ]
    },
    {
        id: 8,
        nome: 'Risoto de frango',
        categoria: 'Salgada',
        ingredientes: [
            "Arroz arbóreo 2 xícaras",
            "Frango desfiado 300g",
            "Caldo de galinha 1 litro",
            "Queijo parmesão 100g",
            "Cebola 1 unidade"
        ],
        preparo: [
            "Refogar a cebola e adicionar o arroz",
            "Adicionar o caldo de galinha aos poucos, mexendo sempre",
            "Misturar o frango desfiado e continuar mexendo",
            "Adicionar queijo parmesão e misturar bem",
            "Servir quente"
        ]
    },
    {
        id: 9,
        nome: 'Torta de frango',
        categoria: 'Salgada',
        ingredientes: [
            "Farinha de trigo 2 xícaras",
            "Leite 1 xícara",
            "Ovos 3 unidades",
            "Frango desfiado 300g",
            "Fermento 1 colher de sopa"
        ],
        preparo: [
            "Misturar a farinha, leite, ovos e fermento",
            "Despejar metade da massa em uma forma",
            "Adicionar o frango desfiado como recheio",
            "Cobrir com o restante da massa",
            "Levar ao forno a 180°C por 40 minutos"
        ]
    },
    {
        id: 10,
        nome: 'Sopa de legumes',
        categoria: 'Salgada',
        ingredientes: [
            "Batata 2 unidades",
            "Cenoura 1 unidade",
            "Chuchu 1 unidade",
            "Caldo de legumes 1 litro",
            "Macarrão 100g"
        ],
        preparo: [
            "Picar os legumes em pedaços pequenos",
            "Cozinhar os legumes no caldo de legumes",
            "Adicionar o macarrão e cozinhar até ficar macio",
            "Temperar a gosto e servir quente"
        ]
    },
    {
        id: 11,
        nome: 'Pudim de leite',
        categoria: 'Doce',
        ingredientes: [
            "Leite condensado 1 lata",
            "Leite 300ml",
            "Ovos 3 unidades",
            "Açúcar 1 xícara"
        ],
        preparo: [
            "Bater o leite condensado, leite e ovos no liquidificador",
            "Fazer um caramelo com o açúcar em uma forma",
            "Despejar a mistura na forma caramelizada",
            "Assar em banho-maria por 1 hora",
            "Levar à geladeira e desenformar antes de servir"
        ]
    },
    {
        id: 12,
        nome: 'Brigadeiro',
        categoria: 'Doce',
        ingredientes: [
            "Leite condensado 1 lata",
            "Chocolate em pó 2 colheres de sopa",
            "Manteiga 1 colher de sopa",
            "Chocolate granulado 100g"
        ],
        preparo: [
            "Misturar o leite condensado, chocolate em pó e manteiga",
            "Cozinhar em fogo baixo até desgrudar da panela",
            "Esperar esfriar e modelar bolinhas",
            "Passar no chocolate granulado",
            "Servir em forminhas"
        ]
    },
    {
        id: 13,
        nome: 'Mousse de maracujá',
        categoria: 'Doce',
        ingredientes: [
            "Leite condensado 1 lata",
            "Creme de leite 1 lata",
            "Suco de maracujá 200ml"
        ],
        preparo: [
            "Bater todos os ingredientes no liquidificador",
            "Despejar em taças individuais",
            "Levar à geladeira por 2 horas antes de servir"
        ]
    },
    {
        id: 14,
        nome: 'Cuscuz nordestino',
        categoria: 'Salgada',
        ingredientes: [
            "Flocos de milho 2 xícaras",
            "Água 1 xícara",
            "Sal 1 pitada",
            "Manteiga 1 colher de sopa"
        ],
        preparo: [
            "Misturar os flocos de milho com água e sal",
            "Deixar hidratar por 10 minutos",
            "Colocar em uma cuscuzeira e cozinhar no vapor por 10 minutos",
            "Servir com manteiga derretida"
        ]
    },
    {
        id: 15,
        nome: 'Biscoito de polvilho',
        categoria: 'Doce',
        ingredientes: [
            "Polvilho azedo 500g",
            "Leite 200ml",
            "Ovos 2 unidades",
            "Óleo 100ml",
            "Sal a gosto"
        ],
        preparo: [
            "Misturar todos os ingredientes até formar uma massa homogênea",
            "Modelar os biscoitos e dispor em uma assadeira",
            "Assar em forno preaquecido a 200°C por 30 minutos",
            "Esperar esfriar antes de servir"
        ]
    },
    {
        id: 16,
        nome: 'Pizza caseira',
        categoria: 'Salgada',
        ingredientes: [
            "Farinha de trigo 500g",
            "Água 250ml",
            "Fermento biológico 10g",
            "Molho de tomate 200g",
            "Queijo mussarela 300g"
        ],
        preparo: [
            "Misturar a farinha, água e fermento até formar uma massa",
            "Deixar a massa descansar por 1 hora",
            "Abrir a massa e espalhar o molho de tomate",
            "Cobrir com queijo e levar ao forno a 200°C por 20 minutos",
            "Servir quente"
        ]
    },
    {
        id: 17,
        nome: 'Cocada',
        categoria: 'Doce',
        ingredientes: [
            "Coco ralado 200g",
            "Açúcar 1 xícara",
            "Leite condensado 1 lata"
        ],
        preparo: [
            "Misturar todos os ingredientes em uma panela",
            "Cozinhar em fogo médio até engrossar",
            "Despejar em uma forma untada e deixar esfriar",
            "Cortar em pedaços e servir"
        ]
    },
    {
        id: 18,
        nome: 'Canjica',
        categoria: 'Doce',
        ingredientes: [
            "Milho para canjica 500g",
            "Leite 1 litro",
            "Leite condensado 1 lata",
            "Coco ralado 100g",
            "Canela a gosto"
        ],
        preparo: [
            "Cozinhar o milho para canjica até ficar macio",
            "Adicionar o leite e o leite condensado",
            "Misturar o coco ralado e cozinhar por mais 10 minutos",
            "Servir quente ou frio com canela por cima"
        ]
    }
]

export {data}