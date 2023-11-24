function createTable(){
    fetch("test.json")
    .then(function(response){
        return response.json();
    })
    .then(function(test){
        let tabelle = document.queryselector("#Text");
        let out ="";
        for ( let element of array){
            out += element.name; 
        }
        tabelle.innerHTML = out;
    })
    
}


