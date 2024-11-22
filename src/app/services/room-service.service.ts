import { Injectable } from '@angular/core';
import { Room } from '../commons/room';
import { Riddle } from '../commons/riddle';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

 roomMap = new Map<string, Room >();
  constructor(private http: HttpClient) {
    this.loadRooms();
    // let rd1=new Riddle("https://th.bing.com/th/id/OIP.3uyI7pVQkRVd2QqltcG6RQHaHa?rs=1&pid=ImgDetMain","Pitas",[""],"undefined","Correcto");
    // let rd2=new Riddle("https://th.bing.com/th/id/OIP.3uyI7pVQkRVd2QqltcG6RQHaHa?rs=1&pid=ImgDetMain","Pitas",["https://th.bing.com/th/id/OIP.3uyI7pVQkRVd2QqltcG6RQHaHa?rs=1&pid=ImgDetMain"],undefined,"Correcto");
    // let riddleList:Riddle[]=[rd1,rd2]
    // let r1:Room=new Room("prueba",riddleList,"pr1")
    // let r2:Room=new Room("prueba 2",[rd2],"pr2")
    // this.roomMap.set(r1.key,r1)
    // this.roomMap.set(r2.key,r2)
   }
   private loadRooms() {
    this.http.get<{ rooms: Room[] }>('https://daroca-aws-demo-s3.s3.eu-west-1.amazonaws.com/rooms.json').subscribe(
      data => {
        data.rooms.forEach(roomData => {
          const riddleList = roomData.riddleList.map(riddleData => 
            new Riddle(
              riddleData.imageUrl,
              riddleData.hintText,
              riddleData.linkList,
              riddleData.answerText,
              riddleData.rewardText
            )
          );
          const room = new Room(roomData.name, riddleList, roomData.key);
          this.roomMap.set(room.key, room);
        });
        
      },
      error => console.error('Error loading rooms:', error)
    );
  }
   getRoom(key:string):Room|undefined{
      return this.roomMap.get(key.toUpperCase()) 
   }
   existRoom(key:string){
    return this.roomMap.has(key.toUpperCase())
   }
}
