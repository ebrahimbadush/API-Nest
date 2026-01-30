import { Component } from '@angular/core';
import { About } from '../about/about';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
