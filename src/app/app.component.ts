import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFlix-Angular-client';

  constructor(public dialog: MatDialog) { }
  //This is the function that will open the dialog when the signup button is clicked
  openUserRegitrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
    //Assigning the dialog a width
    width: '280px'
    });
  }
  openLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      //Assigning the dialog a width
      width: "280px",
    });
  }
}
