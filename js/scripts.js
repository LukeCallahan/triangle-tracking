


//wrap the whole burrito in an Event Listener that passes in load as one argument and an anonymous function as the other argument

//write out function to hide all divs
window.addEventListener("load", function() {
  function setToHidden(){
    console.log('setting elements to hidden');
    document.getElementById("equilateral").setAttribute("class", "hidden");
    document.getElementById("isosceles").setAttribute("class", "hidden");
    document.getElementById("scalene").setAttribute("class", "hidden");
    document.getElementById("not-a-triangle").setAttribute("class", "hidden");
  }
  function whatTriangleIsIt (){
    const side1 = parseInt(document.querySelector("input#side1").value);
    const side2 = parseInt(document.querySelector("input#side2").value);
    const side3 = parseInt(document.querySelector("input#side3").value);
    console.log(side1);

    if (side1 === side2 && side1 === side3){
      document.getElementById("equilateral").removeAttribute("class");
    } else if (side1 == side2 || side1 == side3 || side2 == side3){
      document.getElementById("isosceles").removeAttribute("class");
    } else if (side1 || side2 || side3) {
      document.getElementById("scalene").removeAttribute("class");  
    } else {
      document.getElementById("not-a-triangle").removeAttribute("class");
    }
  }
  
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event){
    //not sure it needs to say event.
    console.log('event listener happening');
    event.preventDefault();
    setToHidden();
    whatTriangleIsIt();
  
  })
});

  
// write out the functions to turn this code into a reality


//Make sure to pause on exceptions and breakpoints to debug
//event listeners with function declarations
