async function getFile(){
    let eintrag ="";
    let Tabelle = document.getElementById("myTable");
    let response =  await fetch("daten.json");
    let json = await response.json();

    for (let element of json){
        eintrag +=` <tr> </th><td>${element.Art} </td> <td>${element.Name} </td> <td> ${element.CO2} </td> </tr>`
    }
    Tabelle.innerHTML = eintrag;
}

function sortTableByAlphabet(spalte){
    let tabelle = document.getElementById("tabelle")
    let sortieren = true;
    let aenderung = false;
    let zaehler =0;
    let x =0;
    let y =0;
    
    let richtung ="auf"

    while (sortieren){
        sortieren =false;
        var rows = tabelle.rows;

        for (let i=1; i < (rows.length-1); i++){
            x =rows[i].getElementsByTagName("TD")[spalte];
            y =rows[i+1].getElementsByTagName("TD")[spalte];

            if (richtung == "auf") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                    aenderung = true;
                    break;
                }
            }
        
            else if(richtung =="ab") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                    aenderung = true;
                    break;
                }
            }
        }
    if (aenderung){
        rows[i].parentNode.insertBefore(rows[i+1], rows [i]);
        sortieren = true;
        zaehler ++;

    } else if (zaehler ==0 && richtung =="auf") {
            richtung ="ab";
            sortieren = true;
        }
    }
}


function sortTableByNumbers(spalte){
    let tabelle = document.getElementById("tabelle")
    let sortieren = true;
    let aenderung = false;
    let zaehler =0;
    let x =0;
    let y =0;
    let richtung ="auf"

    while (sortieren){
        sortieren =false;
        let rows = tabelle.rows;

        for (let i=1; i < (rows.length-1); i++){
            x =rows[i].getElementsByTagName("TD")[spalte];
            y =rows[i+1].getElementsByTagName("TD")[spalte];

            if (richtung == "auf") {

                if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)){
                    aenderung = true;
                    break;
                }
            }
        
            else if(richtung =="ab") {
                if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)){
                    aenderung = true;
                    break;
                }
            }
        }
    if (aenderung){
        rows[i].parentNode.insertBefore(rows[i+1], rows [i]);
        sortieren = true;
        zaehler ++;

    } else if( zaehler ==0 && richtung =="auf") {
            richtung ="ab";
            sortieren = true;
        }
    }
}




function filtern() {
    let input = document.getElementById("filter");
    let filter = input.value.toLowerCase();
    let tabelle = document.getElementById("tabelle");
    let zeilen = tabelle.getElementsByTagName("tr");
    for (let i = 0; i < zeilen.length; i++) {
      var eintrag = zeilen[i].getElementsByTagName("td")[0];
      if (eintrag) {
        var text = eintrag.textContent || eintrag.innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
          zeilen[i].style.display = "";
        } else {
          zeilen[i].style.display = "none";
        }
      }       
    }
  }


