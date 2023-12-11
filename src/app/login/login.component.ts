import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(
    private _router: Router
  ) { }
  ngOnInit() {

  }

  onLogin(data: any) {
    if(data == 'admin'){
      this._router.navigate(['/admin'])
    } else{
      this._router.navigate(['/user'])
    }
  }
}