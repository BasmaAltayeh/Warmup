// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	var str=""
	function repeatStr (n, s) {
		if(s=0){
			return""
		}else{
			return str = str +n +repearStr(n,s-1)
		}
	}