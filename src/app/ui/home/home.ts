import { Component } from '@angular/core';
import { Corosel } from '../corosel/corosel';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-home',
  imports: [Corosel, Cards],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}