import inquirer from "inquirer";
type ansType={
    userGuess:number
}

const systemGeneratedNo =Math.floor(Math.random()* 10);

const answers :ansType = await inquirer.prompt([
     {
      type:"number",
      name:"userGuess",
      message:"Write your guess btw 1 to 10: "
    }
])
const {userGuess}=answers;
console.log(userGuess,"userGuess",systemGeneratedNo,"SYs")

if(userGuess===systemGeneratedNo){
console.log("Yeahhh! Your number is correct! \n You WIN :)")
}else{
    console.log("Please try again :( .\nBetter luck next time!")
}