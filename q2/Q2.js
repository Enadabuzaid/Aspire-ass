	const fruitArray = ["Apple", "Banana", "Cucumber", "Watermelon", "Ice-cream", "Orange", "Eggplant","Egg"];


function length(){

	const result= fruitArray.filter(word => word.length > 5);
	const j = result.join(' | ')
 		   document.getElementById("demo").innerHTML = j;

 		   document.getElementById("count").innerHTML = "The No of Result " + result.length;

}

function firstchar(){
const finalarr = [];
const firstLetter = fruitArray.map((animal) => animal[0])
const iterator = fruitArray.values();
for (const value of iterator) {
	if (value.substring(0,1) == "A") {
		finalarr.push(value);
	}else if (value.substring(0,1) == "E") {
		finalarr.push(value);
	} else if (value.substring(0,1) == "I") {
		finalarr.push(value);
	}else if (value.substring(0,1) == "O") {
		finalarr.push(value);
	}else if  (value.substring(0,1) == "U") {
		finalarr.push(value);
	} 
  			
}
 document.getElementById("demo").innerHTML = finalarr.join(' | ');
 document.getElementById("count").innerHTML = "The No of Result " + finalarr.length;


 //console.log(finalarr);
 //console.log(firstLetter) ;

}


