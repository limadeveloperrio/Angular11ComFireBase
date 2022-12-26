import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  user: Observable<firebase.User>;
  constructor(private authServ: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.authServ.authUser();
  }

}
