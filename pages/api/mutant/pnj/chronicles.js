
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        name: {
            0: "Astrina",
            1: "Danova",
            2: "Hanneth",
            3: "Maxim",
            4: "Silas",
            5: "Victon",
        },
        look: {
            0: "crête rouge, voit le bon dans chaque personne",
            1: "Porte une robe des Temps d’Avant",
            2: "Frange noire, silencieuse, prend des notes constamment",
            3: "Maigrelet, fait plus vieux qu’il ne l’est",
            4: "Anormalement pâle, peau diaphane, triste",
            5: "Juvénile, peau rougeaude, toujours content",
        },
        goal: {
            0: "Trouver un héros qui sauvera le Peuple",
            1: "Comprendre ce dont a besoin l’Aîné, et lui donner",
            2: "Sortir de la misère et consacrer sa vie à l’étude",
            3: "Écrire l’histoire de ceux qui trouveront Éden",
            4: "Faire évoluer l’Arche en une société avancée",
            5: "Devenir un héros dans les histoires au sujet du Peuple",
        },
        stuff: {
            0: "Couteau de fortune",
            1: "Aucune",
            2: "Aucune",
            3: "Aucune",
            4: "Aucune",
            5: "Couteau de fortune",
        }        
       
    })
  }
  
  