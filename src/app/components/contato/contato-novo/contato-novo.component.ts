import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from 'src/app/models/contato';
import { Pessoa } from 'src/app/models/pessoa';
import { ContatoService } from 'src/app/service/contato/contato.service';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-contato-novo',
  templateUrl: './contato-novo.component.html',
  styleUrls: ['./contato-novo.component.css']
})
export class ContatoNovoComponent implements OnInit {

  pessoa: Pessoa = {
    nome: '',
    cpf: '',
    dataNascimento: new Date,
  }

  contato: Contato = {
    nome: '',
    telefone: '',
    email: '',
    pessoa: this.pessoa
  }

  idPessoa: any = '';
  nome: any;
  telefone: any;
  email: any;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private contatoService: ContatoService, private pessoaService: PessoaService,public fb: FormBuilder) { 

  }

 
  ngOnInit(): void {

    this.idPessoa = this.activatedRoute.snapshot.paramMap.get("id");
    this.findPessoaById(this.idPessoa);

  }


  cancelarVoltar(){
    this.router.navigate([`profile/${this.idPessoa}`]);
  }

  criarContato(): void {

    this.contato.pessoa = this.pessoa;
    
    this.contatoService.create(this.contato).subscribe((response)=>{
      if(response){
        this.contatoService.message('Contato criado com sucesso!!');
        this.router.navigate([`profile/${this.idPessoa}`]);
      } 
    }, err => { 
      
      this.contatoService.message('Falha ao criar contato: ' + err);
      this.router.navigate([`profile/${this.idPessoa}`]);
    }); 
  } 


  findPessoaById(id: any): void{
    
    this.pessoaService.findPessoaById(id).subscribe((response)=>{
      this.pessoa = response;
    });

  }


}





