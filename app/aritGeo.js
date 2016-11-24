function aritGeo(array) { 

var difference = array[1] - arr[0];
var ratio = array[1] / array[0];

var arit = true;
var Geo = true;

for(var i = 0; i < array.length - 1; i++)
{
    if( array[i + 1] - array[i] !== difference )
      arit = false;
    if(array[i + 1] / array[i] !== ratio)
      geo = false;
}

if(arit === true)
    return "arithmetic";
else if(geo === true)
    return" geometric";
else if (array === [])
	return 0;
else
    return -1;

}