import inquirer from "inquirer"

let myBalance = 0;
let isContinue = true;
const pinCode = 1234;

const message = "Welcome to ATM";
console.log(message);

let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please Enter your pin:"
})


if(pin_ans.ans === 1234){
    do {
        let ans= await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select any option",
            choices:["Deposit","Withdraw","fast cash","Balance Check"]
        })
    
        //------------------------------------Deposit--------------------------------------------------
        if (ans.list === "Deposit"){
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposit_amount",
                message: "Please Enter your amount:"
            })
    
        if (ans.Deposit_amount > 0){
            myBalance = myBalance + ans.Deposit_amount
            console.log(myBalance);
          }
        }
         //------------------------------------Withdraw--------------------------------------------------
         else if (ans.list === "Withdraw"){
            let ans = await inquirer.prompt({
                type: "number",
                name: "Withdraw_amount",
                message: "Please Enter your amount:"
            })
    
        if (ans.Withdraw_amount <= myBalance){
            myBalance = myBalance - ans.Withdraw_amount
            console.log(myBalance);
        }else{
            console.log("Insufficient Balance");
        }
        }
        //------------------------------------Fast Cash--------------------------------------------------
        else if (ans.list === "fast cash"){
            let ans = await inquirer.prompt({
                type: "list",
                name: "fast_cash",
                message: "Please Select one",
                choices:["500","1000","2000","5000"]
            })
            if(ans.fast_cash <= myBalance){
                if(ans.fast_cash === "500"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
    
                }else if(ans.fast_cash === "1000"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
    
                }else if(ans.fast_cash === "2000"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
                    
                }else if(ans.fast_cash === "5000"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
                }
            }
        }
    
             //------------------------------------check balance --------------------------------------------------
             else if (ans.list === "Balance Check"){
                console.log(`Your Balance is: ${myBalance}`);
            }
            
             //------------------------------------while condition--------------------------------------------------
             let while_ans = await inquirer.prompt({
             type: "confirm",
             name: "condition",
             message: "Do you want to continue?"
             
            })
    
            if (while_ans.condition === false){
                isContinue = false
            }
        }while (isContinue);

}
else{
    console.log("Incorrect Pin");
}
