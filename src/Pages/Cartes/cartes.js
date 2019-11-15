const listCartes = [
    {
        nom : "Velociraptor",
        regions : ["Plaine"],
        types : ["Machoire"],
        bonus : ["ATQ +300", "ATQ +600", "ATQ +1800"]
    },
    {
        nom : "Lézard à collerette des sables",
        regions : ["Gorge"],
        types : ["Machoire"],
        bonus : ["PV +1500", "PV +3000", "PV +9000"]
    }, 
    {
        nom : "Corythosaure de glace",
        regions : ["Montagne"],
        types : ["Machoire"],
        bonus : ["ARMURE +100", "ARMURE +200", "ARMURE +600"]
    }, 
    {
        nom : "Pangolin",
        regions : ["Oasis"],
        types : ["Carapace"],
        bonus : ["ARMURE +100", "ARMURE +200", "ARMURE +600"]
    }, 
    {
        nom : "Oiseau cui-cui",
        regions : ["Bois"],
        types : ["Ailes"],
        bonus : ["ATQ +150-Perforation +75", "ATQ +300-Perforation +150", "ATQ +900-Perforation +450"]
    }, 
    {
        nom : "Ecureuil Volant",
        regions : ["Bois"],
        types : ["Agile"],
        bonus : ["PV +1500", "PV +3000", "PV +9000"]
    }, 
    {
        nom : "Fleur linguiforme",
        regions : ["Gorge"],
        types : ["Poison"],
        bonus : ["PV +1500", "PV +3000", "PV +9000"]
    }, 
    {
        nom : "Bête de lave",
        regions : ["Volcan"],
        types : ["Os"],
        bonus : ["ATQ +300", "ATQ +600", "ATQ +1800"]
    }, 
    {
        nom : "Yak Blanc",
        regions : ["Bois"],
        types : ["Os"],
        bonus : ["CRIT +150", "CRIT +300", "CRIT +900"]
    }, 
    {
        nom : "Petit lapin balaflé",
        regions : ["Plaine"],
        types : ["Griffe"],
        bonus : ["ATQ +300", "ATQ +600", "ATQ +1800"]
    }, 
    {
        nom : "Lainergie",
        regions : ["Plaine"],
        types : ["Duvet"],
        bonus : ["ATQ +150-ARMURE +50", "ATQ +300-ARMURE +100", "ATQ +900-ARMURE +300"]
    }, 
    {
        nom : "Brontotheridé" ,
        regions : ["Lakeland"],
        types : ["Corne"],
        bonus : ["PV +500-ATQ +200","PV +1000-ATQ +400","PV +3000-ATQ +1200"]
    }, 
    {
        nom : "Rhinocéros",
        regions : ["Lakeland"],
        types : ["Corne"],
        bonus : ["ATQ +300", "ATQ +600", "ATQ +1800"]
    }, 
    {
        nom : "Marmotte",
        regions : ["Lakeland"],
        types : ["Agile"],
        bonus : ["PV +1000-ATQ +100","PV +2000-ATQ +200","PV +6000-ATQ +600"]
    }, 
    {
        nom : "Gorille-licorne",
        regions : ["Gorge"],
        types : ["Machoire"],
        bonus : ["PV +750-Perforation +150", "PV +1500-Perforation +300", "PV +4500-Perforation +900"]
    }, 
    {
        nom : "Dimétrodon",
        regions : ["Bois"],
        types : ["Machoire"],
        bonus : ["ATQ +300-Perforation +75", "ATQ +600-Perforation +150", "ATQ +1800-Perforation +450"]
    }, 
    {
        nom :  "Pissenlit",
        regions : ["Foret"],
        types : ["Duvet"],
        bonus : ["PV +1500-Parade +75", "PV +3000-Parade +150", "PV +9000-Parade +450"]
    }, 
    {
        nom : "Crabe de roche",
        regions : ["Chaines"],
        types : ["Carapace"],
        bonus : ["Parade +225", "Parade +450", "Parade +1350"]
    }, 
    {
        nom : "Chouette",
        regions : ["Gorge"],
        types : ["Ailes"],
        bonus : ["PV +1125-ATQ +225", "PV +2250 et ATQ +450", "PV 6750 et ATQ +1350"]
    }, 
    {
        nom : "Dodo des plaines enneigées",
        regions : ["Montagne"],
        types : ["Agile"],
        bonus : ["ARMURE +150", "ARMURE +300", "ARMURE +900"]
    }, 
    {
        nom : "Ptérosaure",
        regions : ["Cote"],
        types : ["Agile"],
        bonus : ["PV +1500-Perforation +75", "PV +3000-Perforation +150", "PV +9000-Perforation +450"]
    }, 
    {
        nom : "Ecureuil volant de foudre",
        regions : ["Chaines"],
        types : ["Agile"],
        bonus : ["PV + 2250", "PV + 4500", "PV + 13500"]
    }, 
    {
        nom : "smilodon",
        regions : ["Oasis"],
        types : ["Griffe"],
        bonus : ["ATQ +450", "ATQ +900", "ATQ +2700"]
    }, 
    {
        nom : "Rhinocéros en chef",
        regions : ["Lakeland"],
        types : ["Corne"],
        bonus : ["PV +750-ATQ +300", "PV +750-ATQ +600", "PV +750-ATQ +1800"]
    }, 
    {
        nom : "T.Rex",
        regions : ["Plaine", "Volcan"],
        types : ["Machoire"],
        bonus : ["ATQ +300-CRIT + 150", "ATQ +600-CRIT + 150", "ATQ +1800-CRIT + 150"]
    }, 
    {
        nom : "Placoderme de roche",
        regions : ["Cote"],
        types : ["Machoire"],
        bonus : ["ARMURE +100-CRIT +150", "ARMURE +200-CRIT +300", "ARMURE +600-CRIT +900"]
    }, 
    {
        nom : "Bête en peluche de foudre",
        regions : ["Foret"],
        types : ["Duvet"],
        bonus : ["PV +2250-Ténacité +75", "PV +4500-Ténacité +150", "PV +13500-Ténacité +450"]
    }, 
    {
        nom : "Crabe de lave",
        regions : ["Volcan"],
        types : ["Carapace"],
        bonus : ["ARMURE +200", "ARMURE +400", "ARMURE +1200"]
    }, 
    {
        nom : "Ankylosaure",
        regions : ["Foret"],
        types : ["Carapace"],
        bonus : ["PV +1500-Ténacité +150", "PV +3000-Ténacité +300", "PV +9000-Ténacité +900"]
    }, 
    {
        nom : "Dragon des montagnes",
        regions : ["Bois"],
        types : ["Carapace"],
        bonus : ["Armure +100-Parade +150", "Armure +200-Parade +300", "Armure +600-Parade +900"]
    }, 
    {
        nom :  "Ptérosaure agile",
        regions : ["Foret"],
        types : ["Ailes"],
        bonus : ["PV +1500-ATQ +300", "PV +3000-ATQ +600", "PV +9000-ATQ +1800"]
    }, 
    {
        nom : "Raptor",
        regions : ["Plaine"],
        types : ["Agile"],
        bonus : ["PV +1500-ATQ +300", "PV +3000-ATQ +600", "PV +9000-ATQ +1800"]
    }, 
    {
        nom : "Renard du désert" ,
        regions : ["Desert"],
        types : ["Agile"],
        bonus : ["PV +1500-Armure +100", "PV +3000-Armure +200", "PV +9000-Armure +600"]
    }, 
    {
        nom : "Vargr",
        regions : ["Foret"],
        types : ["Agile"],
        bonus : ["PV +1500-Parade +150", "PV +3000-Parade +300", "PV +9000-Parade +900"]
    }, 
     {
        nom : "Stégosaure",
        regions : ["Desert"],
        types : ["Os"],
        bonus : ["ATQ +300-CRIT +150", "ATQ +600-CRIT +300", "ATQ +1800-CRIT +900"]
    }, 
    {
        nom :  "Talarurus de Rochenoire",
        regions : ["Volcan"],
        types : ["Os"],
        bonus : ["ATQ +300-Ténacité +150", "ATQ +600-Ténacité +300", "ATQ +1800-Ténacité +900"]
    }, 
    {
        nom : "Yak blanc Alpha",
        regions : ["Montagne"],
        types : ["Os"],
        bonus : ["PV +1500-ATQ +300", "PV +3000-ATQ +600", "PV +9000-ATQ +1800"]
    }, 
    {
        nom : "Tigre Blanc Alpha",
        regions : ["Montagne"],
        types : ["Griffe"],
        bonus : ["PV +1500-ATQ +300", "PV +3000-ATQ +600", "PV +9000-ATQ +1800"]
    }, 
     {
        nom : "Bête de lave en chef",
        regions : ["Volcan"],
        types : ["Machoire"],
        bonus : ["PV +2250-CRIT +150", "PV +4500 et CRIT +300", "PV +1350 et CRIT +900"]
    }, 
    {
        nom : "Radobaan",
        regions : ["Oasis"],
        types : ["Machoire"],
        bonus : ["ARMURE +100-CRIT +225", "ARMURE +200-CRIT +450", "ARMURE +600-CRIT +1350"],
        bonusCarte : "Lorsque les PV de l'adversaire est inférieur à 25%, vos dégats ATQ de base sont augmentés de 3%"
    },
    {
        nom : "Dragon-Tyran",
        regions : ["Chaines"],
        types : ["Machoire"],
        bonus : ["ATQ +300-CRIT +150", "ATQ +600-CRIT +300", "ATQ +1800-CRIT +900"],
        bonusCarte : "Lorsque des attaques basique font un critique, aplique 1 couche supplémentaire de [Mâchorie géante]"
    }, 
    {
        nom : "Bernard l'ermite",
        regions : ["Volcan", "Desert"],
        types : ["Carapace"],
        bonus : ["PV +1500-ARMURE +150", "PV +3000-ARMURE +300", "PV +9000-ARMURE +900"],
        bonusCarte : "quand vous rentrez en combat , l'effet du lien [Désert] est augmenté de 25%"
    }, 
    {
        nom : "Ptérosaure Alpha",
        regions : ["Cote"],
        types : ["Ailes"],
        bonus : ["ATQ +450-Perforation +150", "ATQ +900-Perforation +300", "ATQ +2700-Perforation +900"]
    }, 
    {
        nom : "Vargr Alpha",
        regions : ["Foret"],
        types : ["Agile"],
        bonus : ["PV +2250-Ténacité +150", "PV +4500-Ténacité +300", "PV +1350-Ténacité +900"],
        bonusCarte : "Après le lien de [Fôret tropicale] les soins prodigués sont augmenté +25%"
    }, 
    {
        nom : "Fleur linguiforme alpha",
        regions : ["Oasis"],
        types : ["Poison"],
        bonus : ["ATQ +450-Perforation +150", "ATQ +900-Perforation +300", "ATQ +2700-Perforation +900"]
    }, 
    {
        nom :  "Dragon-Lion",
        regions : ["Volcan"],
        types : ["Os"],
        bonus : ["ATQ +450-Armure + 100", "ATQ +900-Armure + 200", "ATQ +2700-Armure + 600"],
        bonusCarte : "Déclencher l'effet [Os solide] sur les cibles ayant moins de 30% de leurs PV; Soignez l'équivalent de 5% de vos dégats d'ATQ"
    }, 
    {
        nom : "Elan Irlandais",
        regions : ["Plaine"],
        types : ["Duvet"],
        bonus : ["ATQ +450-Armure + 100", "ATQ +900-Armure + 200", "ATQ +2700-Armure + 600"]
    }, 
    {
        nom : "Dragon griffu",
        regions : ["Bois"],
        types : ["Griffe"],
        bonus : ["PV +1500-Perforation +225", "PV +3000-Perforation +450", "PV +9000-Perforation +1350"]
    }, 
    {
        nom :  "Spinosaure",
        regions : ["Bois"],
        types : ["Machoire"],
        bonus : ["ATQ +450-Perforation +225", "ATQ +900-Perforation +450", "ATQ +2700-Perforation +1350"],
        bonusCarte : "Lorsque vous rentrez en combat , Toutes les personnes receoivent +1800 d'ATQ"
    }, 
    {
        nom :  "Dragon montagnier Géant",
        regions : ["Desert"],
        types : ["Carapace"],
        bonus : ["PV +1500-ARMURE +200", "PV +3000-ARMURE +400", "PV +9000-ARMURE +1200"],
        bonusCarte : "Lorsque vous rentrez en combat , Toutes les personnes receoivent +4500 PV , et +300 ARMURE"
    }, 
    {
        nom : "Dragon Typhon",
        regions : ["Cote"],
        types : ["Ailes"],
        bonus : ["ATQ +600-Perforation +150", "ATQ +1200-Perforation +300", "ATQ +3600-Perforation +900"],
        bonusCarte : "Après avoir utilisé un sort infligeant des dégats, vous donne 2 couches supplémentaire de l'effet [Mâchoire géante"
    }, 
    {
        nom :  "Dragon Reine",
        regions : ["Foret"],
        types : ["Agile"],
        bonus : ["PV +2250-Ténacité +225", "PV +4500-Ténacité +450", "PV +1350-Ténacité +1350"],
        bonusCarte : "Lorsque vous rentrez en combat , Toutes les personnes receoivent +6300 PV et +180 armure"
    }, 
    {
        nom : "Mammouth",
        regions : ["Foret"],
        types : ["Os"],
        bonus : ["PV +2250-CRIT +225", "PV +4500-CRIT +450", "PV +1350-CRIT +1350"],
        bonusCarte : "Lorsque vous rentrez en combat , Toutes les personnes receoivent +450 CRIT, et +450 Perforation"
    }, 
]

export default listCartes