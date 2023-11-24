 
    fetch("daten.json")
    .then(function(response){
        return response.json();
    })
    .then(function(laender){
        let tabelle = document.queryselector("#Tabelle");
        let out ="";
        for ( let element of array){
            out += `<tr> <td> ${element.name} </td> </tr> `; 
            console.log(out); 
        }

        
       // tabelle.innerHTML = out;

    })
