async function getFile(){
    let eintrag ="";
    let Tabelle = document.getElementById("myTable");
    let response =  await fetch("./test.json");
    let json = await response.json();
    for (let element of json){
        eintrag +=` <tr> </th><td>${element.name} </td> <td> ${element.age} </td> </tr>`
    
    }
    Tabelle.innerHTML = eintrag;


}

function getHeader(){
    let Header =document.getElementById("Text");
    Header.innerHTML= "Hallo"
}


function getFile2(){
    let eintrag ="";
    let Tabelle = document.getElementById("myTable");
    fetch("test.json")
	    .then(function(response){
            return response.json();
        })
        .then(function (data){
            for (let element of data){
              eintrag +=` <tr> </th><td>${element.name} </td> <td> ${element.age} </td> </tr>`;
            }
        Tabelle.innerHTML = element;
    }); 

}