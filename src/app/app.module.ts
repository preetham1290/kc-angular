import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public/public.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'public',
  component: PublicComponent
}, {
  path: '',
  redirectTo: '/public',
  pathMatch: 'full'
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
