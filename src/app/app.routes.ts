import { Routes } from '@angular/router';
import { HallComponent } from './components/hall/hall.component';

export const routes: Routes = [
    {path:'hall', component:HallComponent},
    {path:'', redirectTo:'/hall',pathMatch:'full'},
    {path:'**', redirectTo:'/hall'}
];
