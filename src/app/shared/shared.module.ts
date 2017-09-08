import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KEYCLOAK_HTTP_PROVIDER, keycloakHttpFactory } from 'app/shared/keyclock/keycloak.http';
import { KeycloakService } from 'app/shared/keyclock/keycloak.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [],
  exports: [],
  providers: [
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [KeycloakService, KEYCLOAK_HTTP_PROVIDER]
    }
  }
  constructor( @Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error(
        'SharedModule is already loaded. Import it in the AppModule only');
    }
  }
}