function netSalaryCalc(){
    prompt = require ('prompt-sync') ();
    let basicSalary = parseFloat(prompt("Input Basic Salary:"));
    let benefits = parseFloat(prompt("Input Benefits:"))
    if (isNaN (basicSalary),isNaN (benefits) || (basicSalary)<=0,(benefits) <=0){
      console.log("All entries should be a number and basic salary should be>=0");  
    return;
}

const grossSalary = basicSalary + benefits;

let paye;

if (grossSalary <= 24000) {
    paye = grossSalary * 0.10;
}

else if (grossSalary <= 32333){
    paye = 24000 * 0.10 + (grossSalary-24000) *0.25;
}
 
else if (grossSalary <= 500000){
    paye = 24000 * 0.10+ (32333 - 24000)* 0.25+ (grossSalary - 32333)*0.325;
}
 else if (grossSalary <= 800000){
    paye = 24000 * 0.10 + (32333 - 24000) *0.25 + (500000-32333) *0.325 +(grossSalary-800000) * 0.35;
 }


 const HousingLevyDeductionsRate = 0.015;

 const housingLevy = grossSalary * HousingLevyDeductionsRate;


 let nhif;

 if(grossSalary <= 5999) nhif = 150;
 if(grossSalary <= 7999) nhif = 300;
 if(grossSalary <= 11999) nhif = 400;
 if(grossSalary <= 14999) nhif = 500;
 if(grossSalary <= 19999) nhif = 600;
 if(grossSalary <= 24999) nhif = 700;
 if(grossSalary <= 29999) nhif = 850;
 if(grossSalary <= 34999) nhif = 900;
 if(grossSalary <= 39999) nhif = 950;
 if(grossSalary <= 44999) nhif = 1000;
 if(grossSalary <= 59999) nhif = 1100;
 if(grossSalary <= 59999) nhif = 1200;
 if(grossSalary <= 69999) nhif = 1300;
 if(grossSalary <= 79999) nhif = 1400;
 if(grossSalary <= 89999) nhif = 1500;
 if(grossSalary <= 99999) nhif = 1600;
 
 else nhif = 1700;


 const tier1Limit= 7000;

 const tier2Limit= 36000;

 const nssfRate = 0.06;
 let nssf;

 if (grossSalary <=tier1Limit ){
    nssf = grossSalary * nssfRate;
 }

 else if (grossSalary <= tier2Limit){
    nssf = tier1Limit * nssfRate + (grossSalary - tier1Limit) * nssfRate;
 }

 else {
    nssf = tier1Limit * nssfRate + (tier2Limit - tier1Limit) * nssfRate;
 }

 const netSalary = grossSalary - paye - housingLevy - nhif -nssf;

 console.log(`Payee (Tax): ${paye.toFixed(2)}`);
 console.log(`Housing Levy: ${housingLevy.toFixed(2)}`);
 console.log(`NHIF Deduction: ${nhif.toFixed(2)}`);
 console.log(`NSSF Deduction: ${nssf.toFixed(2)}`);
 console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
 console.log(`Net Salary: ${netSalary.toFixed(2)}`); 
}


netSalaryCalc();


