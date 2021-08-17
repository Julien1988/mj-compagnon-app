// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
    res.status(200).json({
        0: {
        town: "Avant-poste",
        peoples: "5-20"
        },
        1: {
          town: "Hameau",
          peoples: "20-100"
        },
        2: {
          town: "Village",
          peoples: "100-400"
        },
  
          
  
        
     })
  }