
const Array= [
    {"name": "Michael"},
    {"name": "Andy"},
    {"name": "Bndy"}
]

function bla(){
let speicher ="";
    for (let element of Array){
        speicher += element.name;
        
    }

    return speicher 
}