import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },


  { path: 'login', component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,

    HomeComponent,

    // tslint:disable-next-line:max-line-length

    PagenotfoundComponent,

    LoginComponent,

    NavComponent,
    ProductComponent,
    RegisterComponent
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
  
}
