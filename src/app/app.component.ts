import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { InsertColumnComponent } from "./components/insert-column/insert-column.component";
import { HallComponent } from "./components/hall/hall.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, InsertColumnComponent, HallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
}
