import { Component } from '@angular/core';
import { DrawpadComponent } from '../drawpad/drawpad.component';
import { PictureComponent } from '../picture/picture.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [DrawpadComponent,PictureComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

}
