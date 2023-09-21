function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    var a;
    var b;
    a = 5;
    b = 6;
    b = a;
    let c = (a + b) * 10;
    //this is commented out//
    document.getElementById("demo2").innerHTML = c;
    /*
    this is a 
    multi line
    comment
    */
   //docume.getElementById("demo3").innerHTML=this won't execute//
   const pi = 3.14;
   usedEarlier = "I used this before it was declared.";
   document.getElementById("demo3").innerHTML=usedEarlier;
   var usedEarlier;
   let text = "Hello";
   let text2 = "World";
   text3 = text + " " + text2;
  }