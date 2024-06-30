function studentsGradeCalc (){
    prompt=require("prompt-sync")();
    let scores = prompt("enter student's scores :");
    scores=parseInt(scores);
    if(isNaN(scores)||scores<0||scores>100){
        console.log("scores to range from 0 to 100 and must be a number")
        return;
    }


    let grade;

    if(scores>79){ 
        {grade='A';}
    }

    else if(scores>60){ 
        {grade= 'B';}
    }

    else if(scores>50){
        {grade= 'C';}
    }   

    else if(scores>40){ 
        {grade= 'D';}
    }

    else 
    {grade= 'E';}

    console.log(`studentsGrade ${grade}`);
}

studentsGradeCalc();