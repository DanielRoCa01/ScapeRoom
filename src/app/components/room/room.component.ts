import { Component, OnInit } from '@angular/core';
import { Room } from '../../commons/room';
import { RoomServiceService } from '../../services/room-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Riddle } from '../../commons/riddle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit{
  room:Room | undefined;
  constructor(private roomService:RoomServiceService, private route:ActivatedRoute){

  }
  ngOnInit(): void {
    console.log('room '+this.route.snapshot.paramMap.get('key'))
    this.route.paramMap.subscribe(()=>{
      this.room=this.roomService.getRoom(''+this.route.snapshot.paramMap.get('key'))
    })
    
    
  }

  checkSecretWord(riddle:Riddle) {
    riddle.done = riddle.userInput.toLowerCase() === riddle.answerText;
  }
  
}
