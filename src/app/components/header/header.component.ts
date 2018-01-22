import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private currentUser: any;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {

    // GET User Logged
    this.authService.getCurrentUser()
    .subscribe(currentUser => {
      this.currentUser = currentUser;
    });

  }

}
