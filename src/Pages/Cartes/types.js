const listTypes = {
    "Machoire" : {
        nom : "Machoires",
        Nombre : 0,
        nbBonus : 3,
        Bonus : [
            "Les auto attaques appliquent 1 couche de la carte [Mâchoire géante] supplémentaire. Quand une 4ème couche est empillées, l'auto-attaque suivante infligeras + 40% de Dégats d'ataque",
            "Les auto attaques appliquent 1 couche de la carte [Mâchoire géante] supplémentaire. Quand une 4ème couche est empillées, l'auto-attaque suivante infligeras + 124% de Dégats d'ataque",
            "Les auto attaques appliquent 1 couche de la carte [Mâchoire géante] supplémentaire. Quand une 4ème couche est empillées, l'auto-attaque suivante infligeras + 188% de Dégats d'ataque"
        ],
    },
    "Duvet" : {
        nom : "Duvet",
        Nombre : 0,
        nbBonus : 3, 
        Bonus : [
            "1 énergie supplémentaire au début de chaque combats",
        ]
    },
    "Carapace" : {
        nom : "Carapace",
        Nombre : 0,
        nbBonus : 2, 
        Bonus : [
            "Activez l'effet de [Carapace dure] toutes les 4 auto-attaques et appliquez 1 couche de bouclier équivalente à 50% de la protection de votre famillier.  3 couches sont cumulables au maximum",
            "Activez l'effet de [Carapace dure] toutes les 4 auto-attaques et appliquez 1 couche de bouclier équivalente à 100% de la protection de votre famillier.  3 couches sont cumulables au maximum",
            "Activez l'effet de [Carapace dure] toutes les 4 auto-attaques et appliquez 1 couche de bouclier équivalente à 150% de la protection de votre famillier.  3 couches sont cumulables au maximum"
        ]
    },
    "Ailes" : {
        nom : "Ailes",
        Nombre : 0,
        nbBonus : 3, 
        Bonus : [
            "Lorsque vous commencer un combat, vous donne +20% d'attaque ET +600 de perforation DU CUMUL DES CARTES [Ailes]",
            "Lorsque vous commencer un combat, vous donne +40% d'attaque ET +1200 de perforation DU CUMUL DES CARTES [Ailes]"
        ]
    }, //Here
    "Agile" : {
        nom : "Agile",
        Nombre : 0,
        nbBonus : 3, 
        Bonus : [
            "Activez l'effet de la carte [Agile] toutes les 4 auto-attaques : Soignez 8% de la symbiose de votre famillier en 3 secondes",
            "Activez l'effet de la carte [Agile] toutes les 3 auto-attaques : Soignez 16% de la symbiose de votre famillier en 3 secondes",
            "Activez l'effet de la carte [Agile] toutes les 3 auto-attaques : Soignez 24% de la symbiose de votre famillier en 3 secondes"
        ]
    },
    "Poison" : {
        nom : "Poison",
        Nombre : 0,
        nbBonus : 2, 
        Bonus : [
            "Lorque vos arrivez en combat , métamorphosez UNE unitée aléatoire adverse peandant 1 seconde",
        ]
    },
    "Os" : {
        nom : "Os",
        Nombre : 0,
        nbBonus : 3, 
        Bonus : [
            "Déclenchez l'effet d'Os solide toutes les 4 attaques. Les soins sont prodigués +75% lors des attaques basiques du guérisseur",
            "Déclenchez l'effet d'Os solide toutes les 4 attaques. Les soins sont prodigués +150% lors des attaques basiques du guérisseur"
        ]
    },
    "Griffe" : {
        nom : "Griffe",
        Nombre : 0,
        nbBonus : 3, 
        Bonus : [
            "Lorsque vous rentrez en combat vous donne +30% de PV, et +30% d'attaque DU CUMUL DES CARTES [Griffe acérée]",
        ]
    },
    "Corne"  : {
        nom : "Corne",
        Nombre : 0,
        nbBonus : 1, 
        Bonus : [
            "lorsque vous rentrez en combat , vous donne + 30% d'attaque DU CUMUL DES CARTES [Corne Lourde]",
            "lorsque vous rentrez en combat , vous donne + 30% d'attaque DU CUMUL DES CARTES [Corne Lourde]",
            "lorsque vous rentrez en combat , vous donne + 30% d'attaque DU CUMUL DES CARTES [Corne Lourde]",
        ]
    },
}

export default listTypes