import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  name = 'Admin'
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
