import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../environments/APIREST';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http:  HttpClient) { }

  obtenerPersonajes(){
    return this.http.get( API.characters );
  }
  obtenerPersonaje(id: any){
    return this.http.get( `${API.characters}/${id}` );
  }


}
