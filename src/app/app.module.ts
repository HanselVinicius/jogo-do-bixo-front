import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BetsComponent } from './components/bets/bets.component';
import { NgToastModule } from 'ng-angular-popup';
import { ForbiddenComponent } from './components/error/forbidden/forbidden.component';
import { CookieService } from 'ngx-cookie-service';
import { AnimalCardComponent } from './components/bets/animal-card/animal-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BetDialogComponent } from './components/utils/bet-dialog/bet-dialog.component';
import { RegisterFormComponent } from './components/formularios/register/register-form/register-form.component';
import { NotFoundComponent } from './components/error/not_found/not-found/not-found.component';
import { DialogRegisterAnimalComponent } from './components/utils/dialog-register-animal/dialog-register-animal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponentComponent,
    BetsComponent,
    ForbiddenComponent,
    AnimalCardComponent,
    RegisterFormComponent,
    NotFoundComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgToastModule,
    MatDialogModule,
    BetDialogComponent,
    DialogRegisterAnimalComponent,
    MatIconModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
