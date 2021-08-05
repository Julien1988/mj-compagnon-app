
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        name: {
            0: "Abed",
            1: "Denrik",
            2: "Fillix",
            3: "Jolisa",
            4: "Lula",
            5: "Manja",
        },
        look: {
            0: "Chauve et potelé, sourit en permanence",
            1: "Surnaturellement beau, cheveux brillants",
            2: "Fixe l’équipement des autres, kleptomane",
            3: "Mince, de grands yeux profonds",
            4: "Anormalement petite, parle constamment",
            5: "Voix plaintive, veut toujours échanger quelque chose",
        },
        goal: {
            0: "Faire l’affaire de sa vie",
            1: "Faire que les autres se sentent bien et en tirer avantage",
            2: "Amasser une grande réserve de bouffe et d’équipement",
            3: "Anormalement intéressée par les artefacts et les débris",
            4: "Escroquer tout le monde jusqu’à la dernière balle",
            5: "Devenir une Caïd un jour",
        },
        stuff: {
            0: "Couteau de fortune",
            1: "Aucune",
            2: "Pistolet de fortune, Bonus d’Équipement +2",
            3: "Chaîne de vélo",
            4: "Pistolet de fortune",
            5: "Couteau de fortune",
        }        
       
    })
  }
  
  