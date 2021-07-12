import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Contato } from 'src/app/models/contato';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  baseUrl = environment.baseUrl2;

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  findAll(): Observable<Contato[]>{
    
    const url = `${this.baseUrl} + '/'`;
    return this.http.get<Contato[]>(url, httpOptions);
  
  }

  findAllByPessoaId(idPessoa : any): Observable<Contato[]>{

    const url = `${this.baseUrl}/pessoa/${idPessoa}`;
    return this.http.get<Contato[]>(url, httpOptions);
  
  }

  delete(id: any): Observable<void>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  create(contato: Contato): Observable<Contato>{
    const url = `${this.baseUrl}/`;
    return this.http.post<Contato>(url ,contato);
  }

  message(msg: String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    });
  } 

  update(contato: Contato): Observable<Contato>{
    const url = `${this.baseUrl}/${contato.id}`;
    return this.http.put<Contato>(url,contato);
  }
  
  findContatoById(id: any): Observable<Contato> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Contato>(url);
  }
}
