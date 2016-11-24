var i, minNum, maxNum, array;
minNum = maxNum = array[0];
for (i =1; i <= array.length(); i++) {

	if (array[1] > maxNum) {

		maxNum = array[1];
	}

	if (array[1] < minNum) {

		minNum = array[1];
	} 

	if (minNum == maxNum){
		return array[minNum];
	}
	else {
	  
		return array(minNum,maxNum);
	}
} 