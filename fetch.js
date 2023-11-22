async function getJson (){
    const response = await fetch("test.json");
    const data = await response.json();
    return data;
   
}

getJson().then(data=>console.log(data));