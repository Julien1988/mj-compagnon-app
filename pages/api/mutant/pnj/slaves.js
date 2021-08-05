
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        name: {
            0: "Dink",
            1: "Eria",
            2: "Henny",
            3: "Hent",
            4: "Lin",
            5: "Wilo",
        },
        look: {
            0: "Silencieux et observateur, amer et déloyal",
            1: "Membres très épais, lugubre",
            2: "Sale, chantonne toujours une mélodie",
            3: "Massif avec une peau noueuse, bossu",
            4: "Nerveuse et grincheuse, se bat beaucoup",
            5: "Maigre et faible, un rêveur",
        },
        goal: {
            0: "Trouver quelqu’un dont se servir pour être libre",
            1: "Travailler sans se plaindre",
            2: "Voir le bon côté des choses",
            3: "Travailler et souffrir jusqu’à ce que la mort le libère",
            4: "Exprimer sa violence sur n’importe qui",
            5: "S’échapper de l’Arche et ne jamais revenir",
        },
        stuff: {
            0: "Aucune",
            1: "Aucune",
            2: "Aucune",
            3: "Aucune",
            4: "Aucune",
            5: "Aucune",
        }        
       
    })
  }
  
  