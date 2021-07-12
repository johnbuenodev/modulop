import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './components/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PessoaListComponent } from './components/pessoa/pessoa-list/pessoa-list.component';
import { ContatoListComponent } from './components/contato/contato-list/contato-list.component';
import { PessoaProfileComponent } from './components/pessoa/pessoa-profile/pessoa-profile.component';
import { PessoaNovoComponent } from './components/pessoa/pessoa-novo/pessoa-novo.component';
import { PessoaEditComponent } from './components/pessoa/pessoa-edit/pessoa-edit.component';
import { ContatoProfileComponent } from './components/contato/contato-profile/contato-profile.component';
import { ContatoNovoComponent } from './components/contato/contato-novo/contato-novo.component';
import { ContatoEditComponent } from './components/contato/contato-edit/contato-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PessoaListComponent,
    ContatoListComponent,
    PessoaProfileComponent,
    PessoaNovoComponent,
    PessoaEditComponent,
    ContatoProfileComponent,
    ContatoNovoComponent,
    ContatoEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatBadgeModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
