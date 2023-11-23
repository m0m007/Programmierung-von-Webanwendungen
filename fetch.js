function createTable(){
    fetch("test.json")
    .then(function(response){
        return response.json();
    })
    .then(function(laender){
        let tabelle = document.queryselector("#Tabelle");
        let out ="";
        for ( let element of array){
            out += `<tr> <td> ${element.name} </td> </tr> `; 
        }
    })
}


function getJson2 (){
    fetch("daten.json")
     .then(response=> response.json())
         .then(data=> { console.log(data)

            
 })
   
}


function getText(){

    fetch("sample-file.json")
    .then(response=> response.json())
        .then(data=> {console.log(data)
           return data
    
        })
    }



    function getHallo(){

       return "Hallo"
    }
    


