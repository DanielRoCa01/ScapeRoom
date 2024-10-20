import { Routes } from '@angular/router';
import { HallComponent } from './components/hall/hall.component';
import { RoomComponent } from './components/room/room.component';

export const routes: Routes = [
    {path:'room/:key', component:RoomComponent},
    {path:'hall', component:HallComponent},
    {path:'', redirectTo:'hall',pathMatch:'full'},
    {path:'**', redirectTo:'hall'}
];
