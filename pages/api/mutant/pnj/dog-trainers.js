
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        name: {
            0: "Anny",
            1: "Brie",
            2: "Finn",
            3: "Jony",
            4: "Krinnel",
            5: "Montiac",
        },
        look: {
            0: "Mâchouille une racine, crache constamment",
            1: "Une frange noire cache un œil déformé",
            2: "Teint verdâtre, peau rêche, souvent saoul",
            3: "Visage caché par une capuche, silencieux et agressif",
            4: "Ne parle qu’à son chien, jamais aux gens",
            5: "Cheveux en brosse, irritable et violent",
        },
        goal: {
            0: "Trouver quelqu’un d’autre que son chien à apprécier",
            1: "Tuer toute personne commentant son apparence",
            2: "Oublier sa peine",
            3: "Quitter l’arche pour une vie meilleure",
            4: "Donner quelque chose de bon à manger à son chien",
            5: "Tabasser tous ceux qui disent du mal de son chien",
        },
        stuff: {
            0: "Fronde",
            1: "Couteau de fortune",
            2: "Batte de baseball",
            3: "Hache de fortune",
            4: "Arc",
            5: "Poing américain",
        }        
       
    })
  }
  
  