
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        0: {
            the_village_is: "Abandonné, d6 rations de nourriture et l'eau peut être récupérée."
        },
        1: {
            the_village_is: "Pesté, toute ration une chance sur 6 d'être contaminé."
        },
        2: {
            the_village_is: "Poste de commerce aisé, la nourriture et l'eau sont abondantes et bon marché."
        },
        3: {
            the_village_is: "Dirigé par des bandits. Ne montrez pas trop de richesse."
        },
        4: {
            the_village_is: "Dominé par les adorateurs des araignées. Pas de commerce avec des étrangers."
        },
        5: {
            the_village_is: "Habité par des cannibales. Pas d'eau à vendre mais nourriture abondante."
        },
    })
  }
  
  