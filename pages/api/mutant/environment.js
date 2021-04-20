// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    0: {
      environment: 'Forêt',
      ruin: false,
      menace: true,
      artifact: false
    },
    1: {
      environment: 'Brousse',
      ruin: false,
      menace: true,
      artifact: false
    },
    2: {
      environment: 'Marécages',
      ruin: false,
      menace: true,
      artifact: false
    },
    3: {
      environment: 'Forêt éteinte',
      ruin: false,
      menace: true,
      artifact: false
    },
    4: {
      environment: 'Désert de cendres',
      ruin: false,
      menace: true,
      artifact: false
    },
    5: {
      environment: 'Immense cratère',
      ruin: false,
      menace: true,
      artifact: false
    },
    6: {
      environment: 'Terre vitrifiée',
      ruin: false,
      menace: true,
      artifact: false
    },
    7: {
      environment: 'Ruines luxuriantes ',
      ruin: true,
      menace: true,
      artifact: true
    },
    8: {
      environment: 'Ruines croulantes',
      ruin: true,
      menace: true,
      artifact: true
    },
    9: {
      environment: 'Ruines délabrées',
      ruin: true,
      menace: true,
      artifact: true
    },
    10: {
      environment: 'Ruines intactes',
      ruin: true,
      menace: true,
      artifact: true
    },
    11: {
      environment: 'Usines abandonnées',
      ruin: true,
      menace: true,
      artifact: true
    },
    12: {
      environment: 'Colonie**',
      ruin: false,
      menace: false,
      artifact: false
    },
    
  })
}

