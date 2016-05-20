var toBeSorted = [];

function generateRandomNumbers(amount) {
	var nums = [];
	for (var i = 0; i < amount; i++) {
		nums[i] = Math.Floor(Math.Random() * 11);
	}
	return nums;
}

function bubbleSort(array) {

}

/*********/
//SORTING
/*********/

function quickSort(array){
	var pivot = Math.floor(array.length/2);
	var left = array[0];
	var right = array[array.length-1];
	
}


/*********/
//Searching
/*********/
function binarySearch(search, array) {
	//check for valid array and number.
	if (search.typeOf("number") && Array.isArray(array)) {
		var min = 0;
		var max = array.length - 1;
		var middle = Math.floor((min + max) / 2);

		while (min <= max) {
			if (array[middle] < search) {
				middle++;
			}

			else if (array[middle] > search) {
				middle--;
			}

			else {
				return array[middle];
			}
		}
	}
	return -1;  //no result
}