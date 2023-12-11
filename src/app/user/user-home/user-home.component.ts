import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  constructor(
    private _router:Router
  ){
    
  }
  ImgUrl: string = ''
  staffLogin: boolean = true
  onMenu: boolean = false
  onLeadSubMenu : boolean =  false


  onProfile(){

  }
  LeadSubMenu(){
    this.onLeadSubMenu = !this.onLeadSubMenu;
  }

  logout(){
    this._router.navigate(['/'])
  }

}
