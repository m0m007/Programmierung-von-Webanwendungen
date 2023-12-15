async function getFile(){
    let eintrag ="";
    let Tabelle = document.getElementById("Eintraege");
    let response =  await fetch("daten.json");
    let json = await response.json();

    for (let element of json){
        eintrag +=` <tr> <td>${element.Art} </td> <td>${element.Name} </td> <td> ${element.CO2} </td> </tr>`
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

        for (var i=1; i < (rows.length-1); i++){
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

        for (var i=1; i < (rows.length-1); i++){
            x =rows[i].getElementsByTagName("TD")[spalte];
            y =rows[i+1].getElementsByTagName("TD")[spalte];

            if (richtung == "auf") {

                if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)){
                    aenderung = true;
                    break;
                }
            }
        
            else if(richtung =="ab") {
                if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)){
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

function istUnsichtbar(element){
    return (element.style.display === "none")
}



function suchen() {
    let input = document.getElementById("suche");
    let filter = input.value.toLowerCase();
    let tabelle = document.getElementById("tabelle");
    let zeilen = tabelle.getElementsByTagName("tr");

    for (let i = 0; i < zeilen.length; i++) {
        let eintrag = zeilen[i].getElementsByTagName("td")[1];
        if (eintrag) {
            if (istUnsichtbar(eintrag)){
            } else {
                let text = eintrag.textContent || eintrag.innerText;
                if (text.toLowerCase().indexOf(filter) > -1) {
                }   else {
                    zeilen[i].style.display = "none";
                } 
            }       
        }
    }
}
  
function selectedRadio(){
    let radios = document.getElementsByName("radio");
     for (let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            return parseInt(radios[i].value,10);
        }
    }
}


function ZeilenAusblenden(modus){
    let tabelle = document.getElementById("tabelle");
     let zeilen = tabelle.getElementsByTagName("tr");
     for (let i = 0; i < zeilen.length; i++) {
     let eintrag = zeilen[i].getElementsByTagName("td")[0];
     
         if (eintrag){
 
             if(istUnsichtbar(eintrag)){
             } else {
                 if(eintrag.innerText === modus){
                     zeilen[i].style.display ="";
                } else{
                     zeilen[i].style.display ="none"; 
                }
            }
        }
    }
}


function filtern(){

    switch (selectedRadio()) {
    case 0:
        break;

    case 1:
        ZeilenAusblenden("Land")
        break;

    case 2:
        ZeilenAusblenden("Unternehmen");
        break;
    }
}




function alleZeilenEinblenden(){
    let tabelle = document.getElementById("tabelle");
    let zeilen = tabelle.getElementsByTagName("tr");
    for (let i = 0; i < zeilen.length; i++) {
    let eintrag = zeilen[i].getElementsByTagName("td")[0];

        if (eintrag){
                zeilen[i].style.display ="";
        }
    }
}





function updateTabelle(){
    alleZeilenEinblenden();
    filtern();
    suchen();
}

function isrtl(){
    let tags = ["ar", "he", "fa", "ur", "ks", "ps", "ug", "ku", "pa", "sd"];
    let language = navigator.language;
    let rtl = false;
    for (let i = 0; i < tags.length; i++) {
       if (language == tags[i]){
        rtl = true;
       }
    }
    return rtl;
}

function changetortl(){
    let nav = document.getElementById("navspalte");
    let inhalt = document.getElementById("inhaltsspalte");
    
    if (isrtl()){
        nav.classList.add("order-md-2", "order-lg-2" ,"order-xl-2");
        inhalt.classList.add("order-md-1", "order-lg-1" ,"order-xl-1");
    } else {
        nav.classList.add("order-md-1", "order-lg-1" ,"order-xl-1");
        inhalt.classList.add("order-md-2", "order-lg-2" ,"order-xl-2");
}
}
