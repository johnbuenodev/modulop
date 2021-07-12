import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from 'src/app/models/contato';
import { Pessoa } from 'src/app/models/pessoa';
import { ContatoService } from 'src/app/service/contato/contato.service';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

@Component({
  selector: 'app-contato-edit',
  templateUrl: './contato-edit.component.html',
  styleUrls: ['./contato-edit.component.css']
})
export class ContatoEditComponent implements OnInit {

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
  idContato: any = '';
  
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private contatoService: ContatoService, 
    private pessoaService: PessoaService) { }

  ngOnInit(): void {

    this.idContato = this.activatedRoute.snapshot.paramMap.get('id');
    this.findContatoById(this.idContato);

  }


  cancelarVoltar(){
    this.router.navigate([`profile/${this.idPessoa}`]);
  }

  async alterarContato() {
    
    await this.contatoService.update(this.contato).subscribe((response)=>{
      if(response){
        this.contatoService.message('Contato alterado com sucesso!!');
        this.router.navigate([`profile/${this.idPessoa}`]);
      } 
    }, err => { 
      
      this.contatoService.message('Falha ao alterar contato: ' + err);
      this.router.navigate([`profile/${this.idPessoa}`]);
    }); 
  } 
   
  async findContatoById(id: any){
    
  await  this.contatoService.findContatoById(id).subscribe((response)=>{
      this.contato = response;
      this.idContato = this.contato.id;
      this.idPessoa = this.contato.pessoa.id;
      console.log(this.idPessoa);
    });



  }

}