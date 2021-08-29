// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
    res.status(200).json({
        0: {
            construction_period: "Avant la Brume Écarlate",
             age: "300-1 100 ans"
        },
        1: {
            construction_period: "Au cours des guerres aulnoises",
            age: "305-360 ans"
        },
        2: {
            construction_period: "Pendant la Brume Écarlate ",
            age: "5-280 ans"
        },
        3: {
            construction_period: "Après la Brume Écarlate",
            age: "1d6 an(s)"
        },
          
  
        
     })
  }