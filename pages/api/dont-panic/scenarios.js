// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
    res.status(200).json({
        0: {
            theme: "Invasion",
             event: ["Extraterrestres", "Zombies", "Orcs", "Démons", "Insectes géants",  "Clowns tueurs"]
        },
        1: {
            theme: "Catastrophe",
             event: ["Tremblement de terre", ".Astéroïdes", "Inondation/Tsunami", "Volcan", "Incendie",  "Naufrage"]
        },
        2: {
            theme: "Exploration",
             event: ["Jungle hostile", "Planète sauvage ", "Crypte maudite", "Cité perdue", "Cimetière spatial",  "Autre dimension"]
        },
        3: {
            theme: "Évasion",
             event: ["Prison de haute sécurité", "Geôles du Roi Jean", "Labo d’un savant fou", "Super croiseur impérial", "Mine inondée",  "Château hanté"]
        },
        4: {
            theme: "Ennemi puissant",
             event: ["Kaiju", "Horreur sans nom", "Supervillain", "Terrible nécromancien", "DRH",  "Robot tueur du futur"]
        },
        5: {
            theme: "Soulèvement/révolte",
             event: ["Révolution syndicale", "Rébellion contre l’Empeuratrice de l’Espace", "Résistance face à un gang post-apo", "Alliance contre les Ténèbres", "Mutinerie à bord d’un bateau pirate",  "Révolte des esclaves"]
        },
        
       
          
  
        
     })
  }