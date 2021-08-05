
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        name: {
            0: "Danko",
            1: "Franton",
            2: "Hammed",
            3: "Jena",
            4: "Krin",
            5: "Tula",
        },
        look: {
            0: "Porte toujours un masque à gaz, ne parle jamais",
            1: "Cicatrices au visage, se vante beaucoup",
            2: "Regard vide, tousse à cause de la Souillure, sent la gnôle",
            3: "Tenue camouflage, tripote son arme en permanence",
            4: "Maigre et sèche, toujours sur ses gardes",
            5: "Porte un manteau de pluie usé, tire un vieux caddie de course",
        },
        goal: {
            0: "Aller plus loin que quiconque dans la Zone",
            1: "Être adulé comme un héros par le Peuple",
            2: "Marcher dans la Zone et laisser la Souillure l’achever",
            3: "Traquer une victime pendant des jours avant de l’abattre",
            4: "Éviter les ennuis et les gens",
            5: "Trouver une cause pour laquelle se battre",
        },
        stuff: {
            0: "Fusil de fortune, Bonus d’Équipement +2",
            1: "Aucune",
            2: "Lance de fortune",
            3: "Fusil de fortune, dégâts d’arme 3",
            4: "Arc, Bonus d’Équipement +2",
            5: "Fronde",
        }        
       
    })
  }
  
  