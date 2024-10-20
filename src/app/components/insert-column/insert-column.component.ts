import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomServiceService } from '../../services/room-service.service';

@Component({
  selector: 'app-insert-column',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert-column.component.html',
  styleUrl: './insert-column.component.css'
})
export class InsertColumnComponent {

  scapeCode=''
  constructor(private router:Router, private roomService:RoomServiceService){
    
  }
  onSubmit(){
    console.log('codigo ingresado')
    if(this.roomService.existRoom(this.scapeCode)){
      this.router.navigateByUrl('/room/'+this.scapeCode)
    }
    else{
      console.log('codigo erroneo')
    }
    
  }

}
