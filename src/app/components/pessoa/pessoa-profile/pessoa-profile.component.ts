import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from 'src/app/models/contato';
import { Pessoa } from 'src/app/models/pessoa';
import { ContatoService } from 'src/app/service/contato/contato.service';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoa-profile',
  templateUrl: './pessoa-profile.component.html',
  styleUrls: ['./pessoa-profile.component.css']
})
export class PessoaProfileComponent implements OnInit {

  pessoa: Pessoa = {
    nome: '',
    cpf: '',
    dataNascimento: new Date,
  }

  contatoList: Contato[] = [];

  idPessoa: any ='';
  messageText: String = '';

  constructor(
    private router: Router, 
    private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private serviceContato: ContatoService ) { }

  ngOnInit(): void {

    this.idPessoa = this.activatedRoute.snapshot.paramMap.get("id");
    this.findPessoaById(this.idPessoa);
    this.findAllContatoByPessoaId(this.idPessoa);

  }


  editar(pessoa: Pessoa): void{
    this.router.navigate([`/profile/edit/${pessoa.id}`]);  
  }

  findPessoaById(id: any): void{
    
    this.pessoaService.findPessoaById(id).subscribe((response)=>{
      this.pessoa = response;
    });

  }

  voltarNav(): void{
    this.router.navigate(['']);
  }


  async findAllContatoByPessoaId(idPessoa : any){

    await this.serviceContato.findAllByPessoaId(idPessoa).subscribe((response) => {
     
      response.forEach(contatoObjt => {
          this.contatoList.push(contatoObjt);
      })
    });

  }

  deletarContato(id: any): void {
    this.serviceContato.delete(id).subscribe((response)=> {
       if(response === null){
         this.serviceContato.message('Contato deletado com sucesso!!');
         this.findAllContatoByPessoaId(id);
         this.load();
       }

    });

  }

  load() {
    location.reload()
  }

  novoContato(): void{
    this.router.navigate([`/novo-contato/${this.pessoa.id}`]);
  }

  editarContato(contato: Contato): void{
    let idContato = contato.id;
    let idPessoa = this.pessoa.id;

    this.router.navigate([`profile/edit-contato/${contato.id}`]); 

  }

}
