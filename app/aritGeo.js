function aritGeo(array) { 

	var difference = array[1] - array[0];
	var ratio = array[1] / array[0];

	var arit = true;
	var geo = true;
	if (array.length === 0)
		return 0;

	for(var i = 0; i < array.length - 1; i++)
	{
	    if( array[i + 1] - array[i] !== difference )
	      arit = false;
	    if(array[i + 1] / array[i] !== ratio)
	      geo = false;
	}

	if (arit === true)
	    return "Arithmetic";
	else if(geo === true)
	    return"Geometric"
	else
	    return -1;

}

module.exports = aritGeo;