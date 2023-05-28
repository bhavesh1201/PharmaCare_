import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  hdn : boolean = false;
  constructor(){}

  loginHdn()
  {
    this.hdn = !this.hdn;
  }

  

}
