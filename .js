let letterVisible = false;

alert("Hello good morning to my beautiful girlfriend");
alert("This is our first and I cherish this day so much");
alert("Sorry kay wa pa koy kwarta mao nga kani ra ang mahatag nako sa karon");
alert("I know corny pero unta mapa smile ka naho");
alert("I also have 1 more gift to you, you can't touch it but you can feel it.");
alert("Unta ma happy naka sa small gift naho,Bawi nalang ko sa sunod");
alert("Btw......");
alert("babyyy....")

let iceCreamAnswer = "";

while (iceCreamAnswer.toLowerCase() !== "yes") {
  iceCreamAnswer = prompt("Ice cream date after class? (yes/no)");

  if (iceCreamAnswer.toLowerCase() === "yes") {
    letterVisible = true;
    alert("Yayyy, ice cream date! I love you!");
    alert("dm me yes if you want ice cream date with me after class");
    alert(" you can now read the letter bi")
    break;
  } else if (iceCreamAnswer.toLowerCase() === "no") {
    alert("Please baby");
  } else {
    alert("Yes or no only. Let me ask you again."); 
  }
}
