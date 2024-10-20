import { Injectable } from '@angular/core';
import { Room } from '../commons/room';
import { Riddle } from '../commons/riddle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

 roomMap = new Map<string, Room >();
  constructor() {
    let rd1=new Riddle("https://th.bing.com/th/id/OIP.3uyI7pVQkRVd2QqltcG6RQHaHa?rs=1&pid=ImgDetMain","Pitas",[""],"undefined","Correcto");
    let rd2=new Riddle("https://th.bing.com/th/id/OIP.3uyI7pVQkRVd2QqltcG6RQHaHa?rs=1&pid=ImgDetMain","Pitas",[""],undefined,"Correcto");
    let riddleList:Riddle[]=[rd1,rd2]
    let r1:Room=new Room("prueba",riddleList,"pr1")
    let r2:Room=new Room("prueba 2",[rd2],"pr2")
    this.roomMap.set(r1.key,r1)
    this.roomMap.set(r2.key,r2)
   }
   getRoom(key:string):Room|undefined{
      return this.roomMap.get(key) 
   }
   existRoom(key:string){
    return this.roomMap.has(key)
   }
}
