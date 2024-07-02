// todo list
class task {
    items : string[]

    constructor(...arrays:string[]){
        this.items = arrays
    }

    addTask(tsk:string){
        this.items.push(tsk)
    }

    MarkmyTask(count:number){
        
        if(count >= 0 && count < this.items.length){
            console.log(`\nMarked "${this.items[count]}" as completed`);
            this.items.splice(count,1)
        }else{
            console.log(`Invaliid Task Id`);
        }
    }
   
    displayTask(){
        this.items.forEach((items,count)=>{
         console.log(`${count+1} . ${items}`)
        })
    }
}

let myTaskList:task = new task("Exam-preps" , "OOPS-practice" , "Making-Videos")
console.log(`My Task List:`);

myTaskList.displayTask()

// marking task 2 completed
myTaskList.MarkmyTask(0)

console.log(`\nUpdated Task List:`);

//after marked
myTaskList.displayTask()



