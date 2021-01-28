var dishes=["Chicken Tandoori Pizza" , "Delux Veggie Pizza" ,
  "Paneer Tikka Pizza"];
  var dish=[]
function give(){
    document.getElementById("menu").innerHTML=dishes;
    }

function change(){
    var thing = document.getElementById("bring").value;
    dishes.push(thing);
    dishes.sort();
    document.getElementById("menu").innerHTML=dish;
}