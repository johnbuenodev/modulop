import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit {

  pessoa: Pessoa = {
    nome: '',
    cpf: '',
    dataNascimento: new Date,
  }

  dataAtual = new Date();
  verificaDataAtual: any = '';
  idPessoa: any = '';
  formatandoData : Date;

  constructor(private router: Router, private servicePessoa: PessoaService, private activatedRoute: ActivatedRoute) { 
    this.formatandoData = new Date();
  }

  ngOnInit(): void {
    this.idPessoa = this.activatedRoute.snapshot.paramMap.get("id");
    this.findPessoaById(this.idPessoa);
  }

  formatarDataCpf(): void{

    this.formatandoData = this.pessoa.dataNascimento;
    this.pessoa.dataNascimento = `${this.formatandoData.getDate()}/${this.formatandoData.getMonth() + 1}/${this.formatandoData.getFullYear()}`;


    let cpf = this.pessoa.cpf;
    this.pessoa.cpf = `${cpf.substr(0,3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.slice(9,11)}`;

  }
  
  
  verificaDados(): void{
    
    this.formatarDataCpf();
    
    if(this.pessoa.dataNascimento < this.verificaDataAtual){
       this.update();
       this.router.navigate(['']);
    }
    else{
      this.servicePessoa.message('Data de nascimento não pode ser um dia atual!!');
    }

  }

  update(): void{
    this.formatarDataCpf();
    this.servicePessoa.update(this.pessoa).subscribe((response)=>{
      if(response){
        this.servicePessoa.message('Cadastro alterado com sucesso!!');
        this.router.navigate(['']); 
      }  
    }, err => {
      this.servicePessoa.message('Falha ao atualizar cadastro: ' + err);
      this.router.navigate(['']);
    });
  }

  cancelarVoltar(): void{
    this.router.navigate([`/profile/${this.idPessoa}`]);  
  }

  findPessoaById(id: any): void{
    
    this.servicePessoa.findPessoaById(id).subscribe((response)=>{
      this.pessoa = response;
    });



  }


}
