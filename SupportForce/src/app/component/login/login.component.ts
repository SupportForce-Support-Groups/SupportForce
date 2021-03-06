import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SupportGroup } from 'src/app/models/supportgroup';
import { GroupserviceService } from 'src/app/services/groupservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

currentUser: User[];


  constructor(private userserv: UserserviceService, private router: Router, private groupserv: GroupserviceService) {

  }

  ngOnInit() {

  }

  loginUser(userLogin: NgForm) {
    console.log(userLogin.value);
    this.userserv.myLogin(userLogin.value).subscribe(data => {
      console.log('This is the userId after logging in' + data.userId);
      localStorage.setItem('userId', JSON.stringify(data.userId));
      this.router.navigateByUrl('/home');
    });

    }





  // loginUser(event): void {
  //   event.preventDefault();
  //   const target = event.target;
  //   const username = target.querySelector('#userLogin').value;
  //   const password = target.querySelector('#userPass').value;

  //   this.allUsers.forEach(user => {

  //     if (user.username === username && user.password === password) {
  //       console.log(user.password);
  //       console.log(user.username);
  //       console.log('The user name and password is correct');
  //       return true;
  //     }

  //   });
  //   console.log('username and password is incorrect');



  //   // call a method to pass in username and password to validate
  //   // this.authService.getUserDetails(username, password).subscribe(users => this.allUsers = users);
  // }


}
