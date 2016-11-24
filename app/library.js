module.export = {

	FizzBuzz : function (number){
		if((number%3===0)&&(number%5===0)){
			return ("FizzBuzz");
		}
	},


	FizzBuzz : function (number){
		if(number%3===0){
			return ("Fizz");
		}
	},


	FizzBuzz : function (number){
		if(number%5===0){
			return ("Buzz");
		}
	},


	FizzBuzz : function (number){
		{
			return (number);
		}
	},






	findMinMax : function (array){

		var i, minNum, maxNum, array;
		minNum = maxNum = array[0];
		for (i =1; i <= array.length(); i++){
			if (array[1] > maxNum){

				maxNum = array[1];
			}
		}
	},
		

		
	findMinMax : function (array){

		var i, minNum, maxNum, array;
		minNum = maxNum = array[0];
		for (i =1; i <= array.length(); i++){
			if (array[1] < minNum){

				minNum = array[1];
			}
		}
	},


	findMinMax : function (array){

		var i, minNum, maxNum, array;
		minNum = maxNum = array[0];
		for (i =1; i <= array.length(); i++){
			if (minNum == maxNum){

				return array.push(minNum);
			}
		}
	},

	findMinMax : function (array){

		var i, minNum, maxNum, array;
		minNum = maxNum = array[0];
		for (i =1; i <= array.length(); i++){
			if (minNum !== maxNum) {

				return array.push(minNum,maxNum);
			}				
		}
	},





}





