
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        name: {
            0: "Quark",
            1: "Lambda",
            2: "Loranga",
            3: "Naphta",
            4: "Tetris",
            5: "Zippo",
        },
        look: {
            0: "Maigre, cheveux en piques, toujours souriant",
            1: "Vieux bleu de travail, des outils dans chaque poche",
            2: "Chauve, très sale, gentil",
            3: "Cicatrices de brûlure, lunettes, sent la fumée",
            4: "Porte un casque fait en débris, marmonne en permanence",
            5: "Porte un manteau orné de débris",
        },
        goal: {
            0: "Trouver Éden et la vérité sur le Peuple ",
            1: "Recréer les merveilles technologiques des Temps d’Avant",
            2: "Construire des choses pour aider les autres",
            3: "Faire exploser des trucs",
            4: "Construire un appareil pour contrôle l’esprit des gens",
            5: "Construire une immense sculpture de débris dans l’Arche",
        },
        stuff: {
            0: "Pistolet de fortune, Bonus d’Équipement +2",
            1: "Pistolet de fortune à trois canons",
            2: "Aucune",
            3: "Lance-flammes",
            4: "Aucune",
            5: "Chaîne de vélo",
        }        
       
    })
  }
  
  