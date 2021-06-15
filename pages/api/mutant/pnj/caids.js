
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        name: {
            0: "Brictoria",
            1: "Gunnit",
            2: "Cristor",
            3: "Marlotte",
            4: "Mohamin",
            5: "Oscartian",
        },
        look: {
            0: "Regard froid, visage scarifié, cheveux en brosse",
            1: "Petit, maigre, porte un haut-de-forme",
            2: "Grand et mince, regard féroce",
            3: "Détendue et détachée",
            4: "Cul-de-jatte, porté par des esclaves",
            5: "Obèse à l’extrême, peut à peine se déplacer",
        },
        goal: {
            0: "Faire du Peuple une armée et conquérir la Zone",
            1: "Collecter une grande quantité d’artefacts",
            2: "Renverser l’Aîné et instaurer l’égalité dans l’Arche",
            3: "Développer l’Arche et mener le Peuple vers une vie meilleure",
            4: "Rallier plus de suivants et quitter l’Arche avec son culte",
            5: "Se débarrasser de ses rivaux et diriger l’Arche",
        },
        stuff: {
            0: "Fusil de fortune, bonus d’équipement +2",
            1: "Pistolet de fortune à trois canons",
            2: "Batte cloutée",
            3: "Aucune",
            4: "Couteau de fortune",
            5: "Pistolet de fortune, dégâts 3",
        }        
       
    })
  }
  
  