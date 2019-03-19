 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
	 firstNum = Math.floor(num*0.1);
	 seconedNum = num - firstNum*10;
	 if(seconedNum >= 5){
		 return (firstNum+1)*10;
	 } return firstNum *10;
 }