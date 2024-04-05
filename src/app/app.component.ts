import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawpadComponent } from './components/drawpad/drawpad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrawpadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WhatDidYouSay';
}
