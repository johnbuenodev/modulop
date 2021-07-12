import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-pessoa-novo',
  templateUrl: './pessoa-novo.component.html',
  styleUrls: ['./pessoa-novo.component.css']
})
export class PessoaNovoComponent implements OnInit {


  pessoa: Pessoa = {
    nome: '',
    cpf: '',
    dataNascimento: new Date,
  }
  
  nome: any;
  cpf: any; 
  dataNascimento: any;

  dataAtual : any = new Date;
  verificaDataAtual: String = '';

  constructor(private router: Router, private servicePessoa: PessoaService) { }

  ngOnInit(): void {

  }

  formatarDataCpf(): void{

    let formatandoData = this.pessoa.dataNascimento;
    this.pessoa.dataNascimento = `${formatandoData.getDate()}/${formatandoData.getMonth() + 1}/${formatandoData.getFullYear()}`;

    let cpf = this.pessoa.cpf;
    this.pessoa.cpf = `${cpf.substr(0,3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.slice(9,11)}`;

  }

  criarCadastro(): void {

    this.formatarDataCpf();
    
    this.servicePessoa.create(this.pessoa).subscribe((response)=>{
      if(response){
        this.servicePessoa.message('Cadastro criado com sucesso!!');
        this.router.navigate(['']);
      } 
    }, err => { 
      
      this.servicePessoa.message('Falha ao criar cadastro: ' + err);
      this.router.navigate(['novo']);
    }); 
  } 

  cancelarVoltar(): void{
    this.router.navigate(['']);
  }

}
