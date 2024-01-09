import inquirer from "inquirer";


let todos:string[]=[];
let loop=true;


while(loop){
    const answers:{
        TODO:string,
        addmore:boolean
    }=await inquirer.prompt([
    {
        type:"input",
        name:"TODO",
        message:"What Do You Want To Add In Your TODO?"
    },
    {
        type:"confirm",
        name:"addmore",
        message:"Do You Want To Add more?",
        default:false

    }
    ])
const {TODO,addmore}= answers;
loop = addmore;
if(TODO){
    todos.push(TODO)
}else{
    console.log("Kindly enter valid input");
    
}
}
if(todos.length > 0){
    console.log("Your Todo list:");
    
todos.forEach(todo => {
    console.log(todo);
    
});

}else{
    console.log("NO todos found");
    
}