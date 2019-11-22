const listFamiliers = [ 
    {  
        nom : "Mobelin",
        attribut : "Symbiose",
        type : "Herbivore",
        favori : "Brochette",
        zone : "Forêt tropicale de Sabada",
        numéro : 1,
        element : "Feu:6-Foudre:4"
    },
    {  
        nom : "Mobelin bleu",
        attribut : "Symbiose",
        type : "Herbivore",
        favori : "Ragoût de viande simple",
        zone : "Forêt tropicale de Sabada",
        numéro : 2,
        element : "Givre:6-Terre:4"
    },
    {  
        nom : "Marmotte",
        attribut : "Assistance",
        type : "Herbivore",
        favori : "Brochette",
        zone : "Forêt tropicale de Sabada",
        numéro : 3,
        element : "Terre:6-Foudre:4"
    },
    {  
        nom : "Marmotte de tonnerre",
        attribut : "Assistance",
        type : "Herbivore",
        favori : "Ragoût de viande aux légumes sauvages",
        zone : "Gorge de Chiwawa",
        numéro : 4,
        element : "Foudre:6-Feu:4"
    },
    {  
        nom : "Marmotte de feu",
        attribut : "Assistance",
        type : "Herbivore",
        favori : "Brochette végétarienne",
        zone : "Forêt tropicale de Sabada",
        numéro : 5,
        element : "Feu:6-Foudre:4"
    },
    {  
        nom : "Marmotte enneigée",
        attribut : "Assistance",
        type : "Herbivore",
        favori : "Brochette végétarienne",
        zone : "Gorge de Chiwawa",
        numéro : 6,
        element : "Givre:6-Terre:4"
    },
    {  
        nom : "Smilodon",
        attribut : "ATQ",
        type : "Bête",
        favori : "Généreux plateau grillé",
        zone : "Forêt tropicale de Sabada",
        numéro : 7,
        element : "Terre:6-Foudre:4"
    },
    {  
        nom : "Grenouille à ventre rond",
        attribut : "Symbiose",
        type : "Aquatique",
        favori : "Plateau de sashimi",
        zone : "Côte de Bababo",
        numéro : 8,
        element : "Terre:6-Givre:4"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 9,
        element : "???"
    },
    {  
        nom : "Gorille-licorne",
        attribut : "Guardien",
        type : "Herbivore",
        favori : "Jue de fruit",
        zone : "Forêt tropicale de Sabada",
        numéro : 10,
        element : "Foudre:5-Terre:5"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 11,
        element : "???"
    },
    {  
        nom : "Lainergie",
        attribut : "Guardien",
        type : "Herbivore",
        favori : "Brochette végétarienne",
        zone : "Forêt tropicale de Sabada",
        numéro : 12,
        element : "Terre:6-Foudre:4"
    },
    {  
        nom : "Lainergie à cornes spiralées",
        attribut : "Guardien",
        type : "Herbivore",
        favori : "Doux comme du miel",
        zone : "Glacier de Pucketa",
        numéro : 13,
        element : "Terre:4-Givre:6"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 14,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 15,
        element : "???"
    },
    {  
        nom : "Ornithorynque",
        attribut : "Symbiose",
        type : "Aquatique",
        favori : "Jus de fruit",
        zone : "Forêt tropicale de Sabada",
        numéro : 16,
        element : "Terre:5-Givre:5"
    },
    {  
        nom : "Rapto",
        attribut : "ATQ",
        type : "Dragon terre",
        favori : "oeuf au plat",
        zone : "Cote de Cobo",
        numéro : 17,
        element : "Feu:7-Foudre:3"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 18,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 19,
        element : "???"
    },
    {  
        nom : "Ratel",
        attribut : "ATQ",
        type : "Herbivore",
        favori : "Mélasse",
        zone : "Forêt tropicale de Sabada",
        numéro : 20,
        element : "Foudre:5-Terre:5"
    },
    
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 21,
        element : "???"
    },
    {  
        nom : "Prérosaure agile",
        attribut : "ATQ",
        type : "Volant",
        favori : "Brochette",
        zone : "Forêt tropicale de Sabada",
        numéro : 22,
        element : "Givre:6-Terre:4"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 23,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 24,
        element : "???"
    },
    {  
        nom : "Mobelin noir",
        attribut : "Symbiose",
        type : "Herbivore",
        favori : "Ragout de viande auax legumes sauvages",
        zone : "Gorge de Chiwawa",
        numéro : 25,
        element : "Terre:7-Foudre:3"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 26,
        element : "???"
    },
    {  
        nom : "Dragon acaudal",
        attribut : "Guardien",
        type : "Fragon terre",
        favori : "Ragout de viande aux legumes sauvages",
        zone : "Gorge de chiwawa",
        numéro : 27,
        element : "Feu:7-Foudre:3"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 28,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 29,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 30,
        element : "???"
    },
    {  
        nom : "Brontosaure",
        attribut : "ATQ",
        type : "Volant",
        favori : "Porc aigre-doux",
        zone : "Desert de Bata",
        numéro : 31,
        element : "Foudre:7-Terre:3"
    },
    {  
        nom : "Tricératops de tonnerre",
        attribut : "Guardien",
        type : "Dragon terre",
        favori : "Jus de fruit",
        zone : "Forêt tropicale de Sabada",
        numéro : 32,
        element : "Foudre:7-Feu:3"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 33,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 34,
        element : "???"
    },
    {  
        nom : "Chameau",
        attribut : "Assistance",
        type : "Herbivore",
        favori : "Legumes frits au chili",
        zone : "Desert de Bata",
        numéro : 35,
        element : "Terre:7-Foudre:3"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 36,
        element : "???"
    },
    {  
        nom : "Morse",
        attribut : "Symbiose",
        type : "Aquatique",
        favori : "Plate de sashimi",
        zone : "Cote de Bababo",
        numéro : 37,
        element : "Givre:6-Terre:4"
    },
    {  
        nom : "Poisson-globe",
        attribut : "Symbiose",
        type : "Aquatique",
        favori : "Plateau de sashimi",
        zone : "Cote de Bababo",
        numéro : 38,
        element : "Terre:7-Givre:3"
    },
    {  
        nom : "Tortue",
        attribut : "Guardien",
        type : "Aquatique",
        favori : "Brochette de fruits de mer",
        zone : "Cote de bababo",
        numéro : 39,
        element : "Terre:5-Givre:5"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 40,
        element : "???"
    },
    {  
        nom : "Rapasdepic poilu",
        attribut : "ATQ",
        type : "Volant",
        favori : "Brochette de fruits de mer",
        zone : "Cote de Bababo",
        numéro : 41,
        element : "Givre:6-Terre:4"
    },
    {  
        nom : "Alcidé",
        attribut : "Assistance",
        type : "Volant",
        favori : "Sashimi du guerrier",
        zone : "Fjord de Horu",
        numéro : 42,
        element : "Givre:6-Terre:4"
    },
    {
    nom : "Tigre blanc",
    attribut : "ATQ",
    type : "Bete",
    favori : "Porc aigre-doux",
    zone : "Volcan Jujule",
    numéro : 43,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "Grenouille ronde de flammes",
    attribut : "Symbiose",
    type : "Aquatique",
    favori : "Brochette de fruits de mer",
    zone : "Volcan Jujule",
    numéro : 44,
    element : "Feu:7-Givre:3"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 45,
        element : "???"
    },
    {
    nom : "Ankylosaure osseux",
    attribut : "Guardien",
    type : "Dragon Terre",
    favori : "Ragout de radis",
    zone : "Volcan Jujule",
    numéro : 46,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "Bete de lave en chef",
    attribut : "Guardien",
    type : "Bete",
    favori : "Ragout de viande simple",
    zone : "Volcan Jujule",
    numéro : 47,
    element : "Feu:8-Foudre:2"
    },
    {
    nom : "Écureuil volant",
    attribut : "Assistance",
    type : "Volant",
    favori : "Fromage grille au miel",
    zone : "Volcan Jujule",
    numéro : 48,
    element : "Terre:6-Foudre:4"
    },
    {
    nom : "Marmotte céleste",
    attribut : "Assistance",
    type : "Herbivore",
    favori : "Brochette de champignons",
    zone : "Foret tropical de sinbad",
    numéro : 49,
    element : "Terre:7-Givre:3"
    },
    {
    nom : "Marmotte coup-de-foudre",
    attribut : "Assistance",
    type : "Herbivore",
    favori : "Legumes frit au chili",
    zone : "Forte tropicale de sinbad",
    numéro : 50,
    element : "Foudre:7-Terre:3"
    },
    {
    nom : "Marmotte volante de feu",
    attribut : "Assistance",
    type : "Herbivore",
    favori : "Brochette de champignons",
    zone : "Foret tropicale de sinbad",
    numéro : 51,
    element : "Feu:7-Foudre:3"
    },
    {
    nom : "Marmotte volante de givre",
    attribut : "Assistance",
    type : "Jerbivore",
    favori : "Brochette de champignons",
    zone : "Foret tropicale de sinbad",
    numéro : 52,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "T.rec",
    attribut : "ATQ",
    type : "Dragon terre",
    favori : "Genereux plateau grille",
    zone : "Foret tropicale de Sabada",
    numéro : 53,
    element : "Feu:8-Foudre:2"
    },
    {
    nom : "Smilodon alpha",
    attribut : "ATQ",
    type : "Bete",
    favori : "Banquet de chef inegale",
    zone : "Plaine de toto",
    numéro : 54,
    element : "Terre:8-Foudre:2"
    },
    {
    nom : "Gorille-licorne en chef",
    attribut : "Symbiose",
    type : "Herbivore",
    favori : "Sauce au citron et au miel",
    zone : "Plaines de toto",
    numéro : 55,
    element : "Givre:8-Feu:2"
    },
    {
    nom : "Yak blanc",
    attribut : "Symbiose",
    type : "Herbivore",
    favori : "Ragout de radis",
    zone : "Plaines de toto",
    numéro : 56,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "Ours brun et roux",
    attribut : "Symbiose",
    type : "Bete",
    favori : "Sauce au citron et au miel",
    zone : "Plaines de toto",
    numéro : 57,
    element : "Feu:7-Givre:3"
    },
    {
    nom : "Stégosaure",
    attribut : "Guardien",
    type : "Dragon terre",
    favori : "Oeuf au plat",
    zone : "cote de cobo",
    numéro : 58,
    element : "Terre:8-Foudre:2"
    },
    {
    nom : "Raptor blanc",
    attribut : "ATQ",
    type : "Dragon terre",
    favori : "Genereux plateau grille",
    zone : "Foret tropicale de Sabada",
    numéro : 59,
    element : "Givre:7-Feu:3"
    },
    {
    nom : "Préosaure",
    attribut : "Symbiose",
    type : "Volant",
    favori : "Oeuf au plat",
    zone : "Cote de cobo",
    numéro : 60,
    element : "Feu:8-Foudre:2"
    },
    {
    nom : "Tortue géante",
    attribut : "Guardien",
    type : "Aquatique",
    favori : "Poisson cuit dans les feuilles de lotus",
    zone : "Cote de cobo",
    numéro : 61,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "Ankylosaure de feu",
    attribut : "Guardien",
    type : "Dragon terre",
    favori : "Milkshake mystique",
    zone : "Fjord de hori",
    numéro : 62,
    element : "Feu:7-Foudre:3"
    },
    {
    nom : "Kingura",
    attribut : "Guardien",
    type : "Aquatique",
    favori : "Poisson cuit dans des feuilles de lotus",
    zone : "Fjord de hori",
    numéro : 63,
    element : "Givre:6-Terre:4"
    },
    {
    nom : "Crabe de roche",
    attribut : "Guardien",
    type : "Aquatique",
    favori : "Poisson cuit dans des feuilles de lotus",
    zone : "Fjord de Hori",
    numéro : 64,
    element : "Terre:7-Givre:3"
    },
    {
    nom : "Rhinocéros à lame en chef",
    attribut : "Symbiose",
    type : "Bete",
    favori : "Milkshake mystique",
    zone : "Fjord de Hori",
    numéro : 65,
    element : "Foudre:8-Feu:2"
    },
    {
    nom : "Stégosaure de lave",
    attribut : "Guardien",
    type : "Dragon terre",
    favori : "Pot-au-feu",
    zone : "Grotte de glace de tintin",
    numéro : 66,
    element : "Feu:8-Foudre:2"
    },
    {
    nom : "Dragon d'Éole",
    attribut : "ATQ",
    type : "Volant",
    favori : "Pot-au-feu",
    zone : "Grotte de glace de tintin",
    numéro : 67,
    element : "Terre:7-Foudre:3"
    },
    {
    nom : "Vélociraptor polaire",
    attribut : "Assistance",
    type : "Dragon terre",
    favori : "Pot-au-feu",
    zone : "Grotte de glace de tintin",
    numéro : 68,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "Corythosaure",
    attribut : "Symbiose",
    type : "Dragon terre",
    favori : "Ragout de radis",
    zone : "Grotte de glace de tintin",
    numéro : 69,
    element : "Givre:6-Terre:4"
    },
    {
    nom : "Dodo des plaine enneigées",
    attribut : "ATQ",
    type : "Volant",
    favori : "Sashimi de marlin",
    zone : "Terre enneigees de tovana",
    numéro : 70,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "Yak blanc alpha",
    attribut : "Symbiose",
    type : "Herbivore",
    favori : "Milkshake mystique",
    zone : "Terres enneigees de tovana",
    numéro : 71,
    element : "Givre:8-Terre:2"
    },
    {
    nom : "Ours polaire en chef",
    attribut : "Guardien",
    type : "Bete",
    favori : "Sashimi de marlin",
    zone : "Terre enneigees de tovana",
    numéro : 72,
    element : "Givre:8-Terre:2"
    },
    {
    nom : "Rhinocéros à lame",
    attribut : "Symbiose",
    type : "Bete",
    favori : "Sashimi de marlin",
    zone : "Terre enneigees de tovana",
    numéro : 73,
    element : "Foudre:7-Terre:3"
    },
    {
    nom : "Tétraodon polaire",
    attribut : "Symbiose",
    type : "Aquatique",
    favori : "Soupe de coquilles asint jacques aux legumes sauvages",
    zone : "Glacier de puck",
    numéro : 74,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "Vargr alpha",
    attribut : "ATQ",
    type : "Bete",
    favori : "Cotes de porc au barbecue",
    zone : "Glacier de puck",
    numéro : 75,
    element : "Terre:8-Foudre:2"
    },
    {
    nom : "Lézard à collerette",
    attribut : "Assistance",
    type : "Dragon terre",
    favori : "Cuisse de bete en pot",
    zone : "Glacier de puck",
    numéro : 76,
    element : "Givre:6-Terre:4"
    },
    {
    nom : "Lezard à collerette en chef",
    attribut : "ATQ",
    type : "Dragon terre",
    favori : "Cuisse de bete en pot",
    zone : "Glacier de puck",
    numéro : 77,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "Mobelin rouge en chef",
    attribut : "Symbiose",
    type : "Herbivore",
    favori : "Curry de viande de chef",
    zone : "Montagne enneigee de dodori",
    numéro : 78,
    element : "Feu:8-Foudre:2"
    },
    {
    nom : "Loup blanc alpha",
    attribut : "ATQ",
    type : "Bete",
    favori : "Curry de viande de chef",
    zone : "Montagne enneigee de dodori",
    numéro : 79,
    element : "GivrE:8-Feu:2"
    },
    {
    nom : "Renard polaire",
    attribut : "Assistance",
    type : "Bete",
    favori : "Curry de viance de chef",
    zone : "Montagne enneigee de dodori",
    numéro : 80,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "Ours brun",
    attribut : "Symbiose",
    type : "Bete",
    favori : "Assiette de viandes grillees",
    zone : "Montagne enneigee de dodori",
    numéro : 81,
    element : "Terre:7-Foudre:3"
    },
    {
    nom : "Dodo",
    attribut : "ATQ",
    type : "Vlant",
    favori : "Gala de crevettes",
    zone : "Bois de sinvasa",
    numéro : 82,
    element : "Feu:7-Foudre:3"
    },
    {
    nom : "Dragon reine",
    attribut : "ATQ",
    type : "Volant",
    favori : "Gala de crevette",
    zone : "Bois de sinvasa",
    numéro : 83,
    element : "Givre:10"
    },
    {
    nom : "Ours polaire",
    attribut : "Symbiose",
    type : "Bete",
    favori : "Gala de crevette",
    zone : "Bois de sinvasa",
    numéro : 84,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "Araignée timide",
    attribut : "Assistance",
    type : "Aquatique",
    favori : "Doux comme du miel",
    zone : "Bois de sinvasa",
    numéro : 85,
    element : "Foudre:7-Feu:3"
    },
    {
    nom : "Mammouth",
    attribut : "Symbiose",
    type : "Bete",
    favori : "Declinaison de fruits",
    zone : "Fjord de horu",
    numéro : 86,
    element : "Terre:9-Givre:1"
    },
    {
    nom : "Demétrodon",
    attribut : "Symbiose",
    type : "Dragon terre",
    favori : "Declinaison de fruits",
    zone : "Fjord de horu",
    numéro : 87,
    element : "Terre:7-Givre:3"
    },
    {
    nom : "Dimétrodon de foudre",
    attribut : "Symbiose",
    type : "Dragon terre",
    favori : "Declinaison de fruit",
    zone : "Fjord de horu",
    numéro : 88,
    element : "Foudre:7-Terre:3"
    },
    
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 89,
        element : "???"
    },
    {
    nom : "Brontosaure argyroptère",
    attribut : "ATQ",
    type : "Volant",
    favori : "Sashimi du guerrier",
    zone : "Glacier de Pucketa",
    numéro : 90,
    element : "Foudre:8-Feu:2"
    },
    {
    nom : "Dragon de Rochenoire",
    attribut : "Guardien",
    type : "Dragon terre",
    favori : "Porc aigre doux",
    zone : "Deset de bata",
    numéro : 91,
    element : "Terre:7-Foudre:3"
    },
    {
    nom : "Dragon acaudal de lumière pâle",
    attribut : "Guardien",
    type : "Dragon terre",
    favori : "Sashimi du guerrier",
    zone : "Glacier de pucketa",
    numéro : 92,
    element : "Givre:7-Terre:3"
    },
    {
    nom : "Ours noir",
    attribut : "Symbiose",
    type : "Bete",
    favori : "Doux comme du miel",
    zone : "Glacier de pucketa",
    numéro : 93,
    element : "Foudre:7-Terre:3"
    },
    {
    nom : "tigre blanc alpha",
    attribut : "ATQ",
    type : "Bete",
    favori : "Assiette de viandes grillees",
    zone : "Bois de warry",
    numéro : 94,
    element : "Givre:8-Terre:2"
    },
    {
    nom : "Ankylosaure",
    attribut : "Guardien",
    type : "Dragon terre",
    favori : "Soupe de coquilles saint jacques aux legumes sauvages",
    zone : "Bois de warry",
    numéro : 95,
    element : "Terre:7-Foudre:3"
    },
    {
    nom : "Rhicocéros",
    attribut : "Symbiose",
    type : "Bete",
    favori : "Soupe de coquilles saint jacques aux legumes sauvages",
    zone : "Bois de warry",
    numéro : 96,
    element : "Givre:6-Terre:4"
    },
    {
    nom : "Renar de foudre",
    attribut : "Assistance",
    type : "Herbivore",
    favori : "Melasse",
    zone : "Foret tropicale de sabada",
    numéro : 97,
    element : "Foudre:8-Feu:2"
    },
    {
    nom : "Tuk-tuk de feu",
    attribut : "Assistance",
    type : "Volant",
    favori : "Crabe thermidor",
    zone : "Cote de totori",
    numéro : 98,
    element : "Feu:8-Foudre:2"
    },
    {
    nom : "Strique cristatelle",
    attribut : "Assistance",
    type : "Volcan",
    favori : "Takoyaki",
    zone : "Cote de totori",
    numéro : 99,
    element : "Foudre:7-Terre:3"
    },
    {
    nom : "Moa géant",
    attribut : "Assistance",
    type : "Bete",
    favori : "Takoyaki",
    zone : "Cote de totori",
    numéro : 100,
    element : "Feu:9-Givre:1"
    },
    {
    nom : "Placoderme de Clace",
    attribut : "Guardien",
    type : "Aquatique",
    favori : "Takoyaki",
    zone : "Cote de totori",
    numéro : 101,
    element : "Givre:8-Feu:2"
    },
    {
    nom : "Dragon de lunevent",
    attribut : "Assistance",
    type : "Volant",
    favori : "Crabe thernidor",
    zone : "Desert de Girka",
    numéro : 102,
    element : "Givre:9-Feu:1"
    },
    {
    nom : "Renard du deset",
    attribut : "Assistance",
    type : "Herbivore",
    favori : "Viande cuite dans des feuilles de lotus",
    zone : "Desert de girka",
    numéro : 103,
    element : "Terre:8-Foudre:2"
    },
    {
    nom : "Lézard à collerette en chef",
    attribut : "ATQ",
    type : "Dragon terre",
    favori : "Viande cuite dans des feuilles de lotus",
    zone : "Deset de girka",
    numéro : 104,
    element : "Terre:7-Foure:3"
    },
    {
    nom : "Lézard à collerette solaire",
    attribut : "Assistance",
    type : "Dragon terre",
    favori : "Viande cuite dans feuilles de lotus",
    zone : "Deset de girka",
    numéro : 105,
    element : "Feu:7-Foudre:3"
    },
    
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 106,
        element : "???"
    },
    {
    nom : "Chameau blanc",
    attribut : "Assistance",
    type : "Herbivore",
    favori : "Melange de legumes sauvages",
    zone : "Oasis de Paro",
    numéro : 107,
    element : "Givre:8-Terre:2"
    },
    {
    nom : "Pélican",
    attribut : "Symbiose",
    type : "Volant",
    favori : "Crabe termidor",
    zone : "Givre:7-Terre:3",
    numéro : 108,
    element : "Givre:7-Terre:3"
    },
    
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 109,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 110,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 111,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 112,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 113,
        element : "???"
    },
    {
    nom : "Roi à crinière",
    attribut : "Symbiose",
    type : "Herbivore",
    favori : "Ragout de viande simple",
    zone : "Foret tropicale de Sabada",
    numéro : 114,
    element : "Terre:8-Foudre:2"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 115,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 116,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 117,
        element : "???"
    },
    {
    nom : "T.Rex de Rochenoire",
    attribut : "ATQ",
    type : "Dragon terre",
    favori : "Cuisse de bete en pot",
    zone : "Gorge de chiwawa",
    numéro : 118,
    element : "Terre:8-Givre:2"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 119,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 120,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 121,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 122,
        element : "???"
    },
    {
    nom : "Dragon-tyran",
    attribut : "ATQ",
    type : "Dragon terre",
    favori : "Banquet de chef inegale",
    zone : "Foret tropicale de sinbad",
    numéro : 123,
    element : "Feu:10"
    },
    {
    nom : "Panda roux",
    attribut : "Assistance",
    type : "Bete",
    favori : "Legume frits au chili",
    zone : "Desert de bata",
    numéro : 124,
    element : "Feu:8-Foudre:2"
    },
    
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 125,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 126,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 127,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 128,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 129,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 130,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 131,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 132,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 133,
        element : "???"
    },
    {
    nom : "T.rex de foudre",
    attribut : "ATQ",
    type : "dragon terre",
    favori : "Assiette de viandes grillees",
    zone : "Bois de warry",
    numéro : 134,
    element : "Foudre:8-Terre:2"
    },
    
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 135,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 136,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 137,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 138,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 139,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 140,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 141,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 142,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 143,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 144,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 145,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 146,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro :147,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 148,
        element : "???"
    },
    {
    nom : "Ours brun et roux en chef",
    attribut : "Guardien",
    type : "Bete",
    favori : "Melasse",
    zone : "Foret tropicale de sabada",
    numéro : 149,
    element : "Feu:8-Givre:2"
    },
    {
    nom : "???",
    attribut : "???",
    type : "???",
    favori : "???",
    zone : "???",
    numéro : 150,
    element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 151,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 152,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 153,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 154,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 155,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 156,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 157,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 158,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 159,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 160,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 161,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 162,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 163,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 164,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 165,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 166,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 167,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 168,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 169,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 170,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 171,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 172,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 173,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 174,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 175,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 176,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 177,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 178,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 179,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 180,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 181,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 182,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 183,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 184,
        element : "???"
    },
    {
        nom : "???",
        attribut : "???",
        type : "???",
        favori : "???",
        zone : "???",
        numéro : 185,
        element : "???"
    },
]


export default listFamiliers