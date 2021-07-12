import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  pessoaList: Pessoa[] = [];

  constructor(private router: Router, private servicePessoa: PessoaService) { }

  ngOnInit(): void {
    this.findAll();
  }
  
  async findAll(){

    await this.servicePessoa.findAll().subscribe((response) => {
     
      response.forEach(pessoaObjt => {
          this.pessoaList.push(pessoaObjt);
      })
    });

  }

  deletar(id: any): void {
    this.servicePessoa.delete(id).subscribe((response)=> {
       if(response === null){
         this.servicePessoa.message('Pessoa deletada com sucesso!!');
         this.findAll();
         this.load();
       }

    });

  }

  load() {
    location.reload()
  }

  novoRegistro(): void{
    this.router.navigate(['/novo']);
  }

  acessar(pessoa: Pessoa): void{
    this.router.navigate([`/profile/${pessoa.id}`]);
  }

  editar(pessoa: Pessoa): void{
    this.router.navigate([`/profile/edit/${pessoa.id}`]);  
  }

}