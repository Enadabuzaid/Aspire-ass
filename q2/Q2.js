	const fruitArray = ["Apple", "Banana", "Cucumber", "Watermelon", "Ice-cream", "Orange", "Eggplant","Egg"];


function length(){

	const result= fruitArray.filter(word => word.length > 5);
	const j = result.join(' | ')
 		   document.getElementById("demo").innerHTML = j;

 		   document.getElementById("count").innerHTML = "The No of Result " + result.length;

}

function r(){

	const value = fruitArray.includes("A");
 		   document.getElementById("demo").innerHTML = value;

 		   

}
	


