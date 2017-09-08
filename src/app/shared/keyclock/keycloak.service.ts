/// <reference path="keycloak.d.ts"/>
import { Injectable } from '@angular/core';

import * as Keycloak from './keycloak';

type KeycloakClient = Keycloak.KeycloakInstance;
type InitOptions = Keycloak.KeycloakInitOptions;

@Injectable()
export class KeycloakService {
  static keycloakAuth: KeycloakClient = Keycloak();

  static init(configOptions?: string | {}, initOptions?: InitOptions): Promise<any> {
    KeycloakService.keycloakAuth = Keycloak(configOptions);

    return new Promise((resolve, reject) => {
      KeycloakService.keycloakAuth.init(initOptions)
        .success(() => {
          resolve();
        })
        .error((errorData: any) => {
          reject(errorData);
        });
    });
  }

  authenticated(): boolean {
    return KeycloakService.keycloakAuth.authenticated;
  }

  login() {
    KeycloakService.keycloakAuth.login();
  }

  logout() {
    KeycloakService.keycloakAuth.logout();
  }

  account() {
    KeycloakService.keycloakAuth.accountManagement();
  }

  authServerUrl(): string {
    return KeycloakService.keycloakAuth.authServerUrl;
  }

  realm(): string {
    return KeycloakService.keycloakAuth.realm;
  }

  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.keycloakAuth.token) {
        KeycloakService.keycloakAuth
          .updateToken(5)
          .success(() => {
            resolve(<string>KeycloakService.keycloakAuth.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      } else {
        reject('Not loggen in');
      }
    });
  }
}