//author:Bernardo Bernal Estefan

const getSleepHours = day => {
	switch (day) {
		case 'monday':  
			return 8;
			//break;      <-- break not needed cause return already jumps out of the function.
	    case 'tuesday':  
			return 7;
			//break;      <-- break not needed cause return already jumps out of the function.
	    case 'wednesday':  
			return 5;
			//break;      <-- break not needed cause return already jumps out of the function.
		case 'thursday':  
			return 7;
			//break;      <-- break not needed cause return already jumps out of the function.
	    case 'friday':  
			return 8;
			//break;      <-- break not needed cause return already jumps out of the function.  
		case 'saturday':  
			return 9;
			//break;      <-- break not needed cause return already jumps out of the function.     
		case 'sunday':  
			return 9;
			//break;      <-- break not needed cause return already jumps out of the function.  
		default:  
			return 'Input is not a valid day';
			//break;    <--- break not needed on default case
	}	// <--- added } here to close switch statement.
}
console.log(getSleepHours('tuesday'));
