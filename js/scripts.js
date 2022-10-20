


//wrap the whole burrito in an Event Listener that passes in load as one argument and an anonymous function as the other argument

//write out function to hide all divs
window.addEventListener("load", function(){
  function setToHidden(){
    console.log('setting elements to hidden');
    document.getElementById("side1").setAttribute("class", "hidden");
    document.getElementById("side2").setAttribute("classs", "hidden");
    document.getElementById("side3").setAttribute("classs", "hidden");
  }
  //write out the branching if statements
  function whatTriangleIsIt (){
    const side1 = document.querySelector("input#side1").value;
    const side2 = document.querySelector("input#side2").value;
    const side3 = document.querySelector("input#side3").value;
    console.log(side1);
    
    //if all 3 sides are equal, equilateral
    if (side1 === side2 && side1 === side3){
      document.getElementById("equilateral").removeAttribute("class");
    } else if (side1 == side2 || side1 == side3 || side2 == side3){
      document.getElementById("isosceles").removeAttribute("class");
    } else if () {
      document.getElementById("scalene").removeAttribute("class");  
    } else () {
      document.getElementById("not-a-triangle").removeAttribute("class");
    }
  }
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event){
    //not sure it needs to say event.
    event.preventDefault();
    setToHidden();
    whatTriangleIsIt();
  })
});

  
// write out the functions to turn this code into a reality


//Make sure to pause on exceptions and breakpoints to debug
//event listeners with function declarations
