
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        0: {
            level: 0,
            description: "Oasis non gangrenée."
        },
        1: {
            level: 1,
            description: "Gangrène faible. Les PJ subissent un point de Gangrène par jour."
        },
        2: {
            level: 2,
            description: "Gangrène forte. Les PJ subissent un point de Gangrène par heure."
        },
       
    })
  }
  
  