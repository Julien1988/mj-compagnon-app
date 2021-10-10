
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        0: {
            looking_for_food: "Vous vous perdez et passez la journée retrouver la route."
        },
        1: {
            looking_for_food: "Localisez d6+1 rations de nourriture et d'eau - une ration est gâchée et vous tombez malade 6 heures après la consommation. Présence DR12 pour s'en apercevoir."
        },
        2: {
            looking_for_food: "Vous trouvez d6+3 rations de bonne nourriture ou d'eau fraîche."
        },
        3: {
            looking_for_food: "Vous traquez une bête sauvage. Le tuer rapporte d8+2 rations. * Voir le supplément 'Eat Prey Kill'"
        },
        4: {
            looking_for_food: "Vous trouvez un village qui vend potentiellement ce dont vous avez besoin. Rouler sur la table du village."
        },
        5: {
            looking_for_food: "Vous trouvez un village qui vend potentiellement ce dont vous avez besoin. Rouler sur la table du village."
        },
    })
  }
  
  