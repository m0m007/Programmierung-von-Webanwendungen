fetch( "test.json")

.then (function(response){
  return response.json();
})

.then (function(names){
  let placeholder = document.querySelector("myTable");
  let out ="";

  for (let name of names){

  out += `<tr> 
          
    <td>${data[i].name}</td>
    <td>${data[i].age}</td>
   </tr>` ;   
  }
 placeholder.innerHTML = out;
})