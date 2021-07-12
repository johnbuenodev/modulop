import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/models/pessoa';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  findAll(): Observable<Pessoa[]>{
    const url = `${this.baseUrl}/`;
    return this.http.get<Pessoa[]>(url, httpOptions);
  
  }

  delete(id: any): Observable<void>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  create(pessoa: Pessoa): Observable<Pessoa>{
    const url = `${this.baseUrl}/`;
    return this.http.post<Pessoa>(url ,pessoa);
  }

  message(msg: String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    });
  } 

  update(pessoa:Pessoa): Observable<Pessoa>{
    const url = `${this.baseUrl}/${pessoa.id}`;
    return this.http.put<Pessoa>(url,pessoa);
  }
  
  findPessoaById(id: any): Observable<Pessoa> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Pessoa>(url);
  }
}
