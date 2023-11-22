async function getJson (){
    const response = await fetch("test.json");
    const data = await response.json();
    return data;
   
}

function get2 (){
    
    return "2"
   
}
