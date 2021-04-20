// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    environment: 'Forêt',
    ruin: false,
    menace: true,
    artifact: false
  })
}
// ENVIRONNEMENT RUINES MENACES ARTEFACTS
// Forêt-dense Non Oui Non
