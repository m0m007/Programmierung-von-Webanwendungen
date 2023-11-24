
const Array= {
    
    "laender": [
        {"land": "Volksrepublik China", "CO2": "11535" },
        {"land": "Vereinigte Staaten von Amerika", "CO2": "5107" },
        {"land": "Indien", "CO2": "2597" },
        {"land": "Russland", "CO2": "1792" },
        {"land": "Japan", "CO2": "1154" },
        {"land": "Deutschland", "CO2": "702" },
        {"land": "Iran", "CO2": "701" },
        {"land": "Südkorea", "CO2": "352" },
        {"land": "Indonesien", "CO2": "626" },
        {"land": "Saudi-Arabien", "CO2": "615" }
        ],

     "unternehmen": [
        {"unternehmen" : "RWE", "CO2" : "118"},
        {"unternehmen" : "HeidelbergCement", "CO2" : "73"},
        {"unternehmen" : "E.ON", "CO2" : "69"},
        {"unternehmen" : "Lufthansa", "CO2" : "33"},
        {"unternehmen" : "Eskom", "CO2" : "216"},
        {"unternehmen" : "Gazprom", "CO2" : "111"},
        {"unternehmen" : "Enel", "CO2" : "107"},
        {"unternehmen" : "Tepco", "CO2" : "71"},
        {"unternehmen" : "Ameren", "CO2" : "60"},
        {"unternehmen" : "FirstEnergy", "CO2" : "63"}

        ]
}

function bla(){
let speicher ="";

    for (let element of Array.laender){
        speicher += element.land;
        console.log(speicher); 
    }
    return speicher;
    
}
