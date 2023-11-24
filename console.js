
    let eintrag ="";
    let Header = document.getElementById("myTable")
    let response =  await fetch("test.json");
    let json = await response.json();
    let i =0;
    for (let element of json){
        eintrag +=` <tr> <th scope="row">${i}</th><td>${element.name} </td> <td> ${element.age} </td> </tr>`
        i++;
    }
    Header.innerHTML = eintrag;



