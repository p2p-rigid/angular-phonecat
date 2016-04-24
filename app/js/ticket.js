(function(){

	function calculateCost(a) {
		cost = 0;
        currentDayIndex = 0;
        for(;;){
            indexOfLastDayInAWeek = findLastDayIndexInAWeekFromStartDay(a, a[currentDayIndex]);
            if (indexOfLastDayInAWeek - currentDayIndex >= 3){ // 4 days justify a weekly ticket
                cost = cost + 7;
                currentDayIndex = indexOfLastDayInAWeek + 1;
            } else {
                cost = cost + 2;
                currentDayIndex++;
            }
            if(currentDayIndex > a.length -1){
                break;
            }
        }
        return cost > 25 ? 25 : cost;  // if weekly + daily > 25, just buy monthly ticket
	}

	function findLastDayIndexInAWeekFromStartDay(allDaysInArray, startDay) {
		console.log('input is: ' + allDaysInArray);
		lastDayInWeekFromStartDay = startDay + 6;
        if (lastDayInWeekFromStartDay >= allDaysInArray[allDaysInArray.length-1])
            return  allDaysInArray.length - 1;
        for (var i =0; i < allDaysInArray.length; i++) {
            if(allDaysInArray[i] == lastDayInWeekFromStartDay) {
                return i;
            } else if (allDaysInArray[i] > lastDayInWeekFromStartDay) {
                return i -1;
            }
        }
        return -1; // an invalid index indicate not found
	}

	var cost = calculateCost([1,2,4,5,7,29,30]);
	//var cost = calculateCost([1,2,3,4,7,8,9,10,14,15,16,17,20,25,26,27,30]);
	//var cost = calculateCost([1]);
	console.log('Cost is: ' + cost);
})();