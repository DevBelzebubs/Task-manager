export class Task{
    constructor(public title:string,public description:string, public createdAt:Date, public completed:boolean){}
    mostrDesc(task:Task){
        return task.description.substring(0,15);
    }
}
