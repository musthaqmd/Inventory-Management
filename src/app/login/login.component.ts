import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  alertbar()
  {
    alert('Login Sucessfully !!')
    // this.snackbar.open('login Succefully','close')
  }

}
