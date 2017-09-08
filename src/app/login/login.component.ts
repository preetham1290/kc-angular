import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../shared/keyclock/keycloak.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit() {
    KeycloakService.init('./assets/keycloak.json').then(() => {
      this.keycloakService.login();
    }, () => {
      console.log('failed');
    });
  }

}
