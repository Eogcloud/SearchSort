function generateRandomNumbers(amount) {
	var nums = [];
	for (var i = 0; i < amount; i++) {
		nums[i] = Math.floor(Math.random() * 11);
	}
	return nums;
}

/***********/
/* Sorting */
/***********/

function quickSort(array) {
	var pivot = Math.floor(array.length / 2);
	var left = array[0];
	var right = array[array.length - 1];

}

function bubbleSort(array) {
	var swap;
	while (swap) {
		swap = false;
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				//swap variable contents
				array[i] = array[i] + array[i + 1];
				array[i + 1] = array[i] - array[i + 1];
				array[i] = array[i] - array[i + 1];
				swap = true;
			}
		}
	}
	return array
}

function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

	var middle = parseInt(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);

	function merge(left, right) {
		var result = [];

		while (left.length && right.length) {
			if (left[0] <= right[0]) {
				result.push(left.shift());
			} else {
				result.push(right.shift());
			}
		}

		while (left.length)
			result.push(left.shift());

		while (right.length)
			result.push(right.shift());

		return result;
	}
}

/*************/
/* Searching */
/*************/
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