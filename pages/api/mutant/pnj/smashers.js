
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        name: {
            0: "Hugust",
            1: "Ingrit",
            2: "Lenny",
            3: "Marl",
            4: "Nelma",
            5: "Rebeth",
        },
        look: {
            0: "Posture imposante, bras simiesques, grogne",
            1: "Petit et trapu, voix rauque",
            2: "Sec, mince et musclé",
            3: "Gras avec une voix plaintive",
            4: "Ridiculement grand, visage anormal",
            5: "Peau tanée et pleine de cicatrices, voix sifflante",
        },
        goal: {
            0: "Cesser de se battre et construire quelque chose",
            1: "Tabasser tous ceux sur son chemin",
            2: "Survivre, rien de plus",
            3: "Tourmenter les autres et les entendre crier",
            4: "Faire plaisir au Caïd",
            5: "Montrer qui est le plus fort",
        },
        stuff: {
            0: "Poing américain",
            1: "Chaîne de vélo",
            2: "Batte cloutée",
            3: "Couteau de fortune",
            4: "Hache de fortune",
            5: "Pistolet de fortune",
        }        
       
    })
  }
  
  