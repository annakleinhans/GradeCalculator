function onLoad1(){


    calculateGrade();

}



/* to calculate the current grade you have to add categories and average them */
function calculateGrade(){
    var homework = document.getElementById("Homework").value;  // "70,80,90"
    var hwArr = average(convertToArray(homework));
    var homeWeight = parseInt(document.getElementById("homeworkWeight").value);
    var homeWeightDec = homeWeight / 100;
    var hwWA = hwArr * homeWeightDec;


    var classwork = document.getElementById("Classwork").value;
    var cwArr = average(convertToArray(classwork));
    var classWeight = parseInt(document.getElementById("homeworkWeight").value);
    var classWeightDec = classWeight / 100;
    var cwWA = cwArr * classWeightDec;

    var participation = document.getElementById("Participation").value;
    var partiArr = average(convertToArray(participation));
    var partiWeight = parseInt(document.getElementById("homeworkWeight").value);
    var partiWeightDec = partiWeight / 100;
    var partiWA = partiArr * partiWeightDec;

    var projects = document.getElementById("Projects").value;
    var projArr = average(convertToArray(projects));
    var projWeight = parseInt(document.getElementById("homeworkWeight").value);
    var projWeightDec = projWeight / 100;
    var projWA = projArr * projWeightDec;

    var tests = document.getElementById("Tests").value;
    var tesArr = average(convertToArray(tests));
    var tesWeight = parseInt(document.getElementById("homeworkWeight").value);
    var tesWeightDec = tesWeight / 100;
    var tesWA = tesArr * tesWeightDec;



    var weightSum = (homeWeightDec + classWeightDec + partiWeightDec + projWeightDec + tesWeightDec);
    var weightedAverages = tesWA + projWA + partiWA + cwWA + hwWA;
    var currentGrade = weightedAverages / weightSum;

    document.getElementById("grade").innerHTML=currentGrade;

    console.log("t1");
    console.log("t2");

    return currentGrade;




}



/* this function takes the current grade and uses it to calculate the grade
needed on the final to get a certain grade (entered by the user)
 */
function onLoad2(){
    calculateFinal();
}


function calculateFinal(){
    var calculatedGrade = calculateGrade();
    var getFinal = (document.getElementById("weightOfFinal").value);
    var finalArray = convertToArray(getFinal);
    var weightOfFinal = parseInt(finalArray);

    var getAspired = document.getElementById("aspiredGrade").value;
    var aspiredArray = convertToArray(getAspired);
    var aspiredGrade = parseInt(aspiredArray);
    var what = calculatedGrade * (1 - weightOfFinal);
    var finalGradeReq =  (aspiredGrade - what) / weightOfFinal;
    document.getElementById("final grade needed").innerHTML = finalGradeReq;

}

/* this function calculates the grade you will need to get on the final with your current grade */
/* this function calculates the averages of each individual category */
function average(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}


/* this function converts the string of numbers into an array */
function convertToArray(str){
    var scoresArray = str.split(",");
    for(var i = 0; i < scoresArray.length; i++){
        scoresArray[i] = parseInt(scoresArray[i]);
    }
    return scoresArray;
}





