
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        0: {
            level: "1-4",
            description: "Secteurs en marge de la Zone"
        },
        1: {
            level: "5-8",
            description: "Secteurs centraux de la Zone"
        },
        2: {
            level: "9+",
            description: "Zones anormalement dangereuses"
        },
       
    })
  }
  
  