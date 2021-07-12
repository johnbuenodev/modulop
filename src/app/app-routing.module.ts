import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoEditComponent } from './components/contato/contato-edit/contato-edit.component';
import { ContatoNovoComponent } from './components/contato/contato-novo/contato-novo.component';
import { PessoaEditComponent } from './components/pessoa/pessoa-edit/pessoa-edit.component';

import { PessoaListComponent } from './components/pessoa/pessoa-list/pessoa-list.component';
import { PessoaNovoComponent } from './components/pessoa/pessoa-novo/pessoa-novo.component';
import { PessoaProfileComponent } from './components/pessoa/pessoa-profile/pessoa-profile.component';


const routes: Routes = [

  {
    path: '',
    component: PessoaListComponent
  },
  {
    path: 'profile/:id',
    component: PessoaProfileComponent
  },
  {
    path: 'profile/edit/:id',
    component: PessoaEditComponent
  },
  {
    path: 'novo',
    component: PessoaNovoComponent
  },
  {
    path: 'novo-contato/:id',
    component: ContatoNovoComponent
  },
  {
    path: 'profile/edit-contato/:id',
    component: ContatoEditComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
