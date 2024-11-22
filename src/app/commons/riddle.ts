export class Riddle {
     done:boolean=false
     userInput:string=''
    constructor(
       public imageUrl:string | undefined,
       public hintText:string |undefined,
       public linkList:string[] |undefined,
       public answerText:string| undefined,
       public rewardText:string

    ){
        if(answerText===null){
            this.done=true
        }
    }
}
