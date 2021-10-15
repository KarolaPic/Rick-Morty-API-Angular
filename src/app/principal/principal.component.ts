import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../services/rickandmorty.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  Personajes:any = [];

  constructor(private ramS: RickandmortyService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  obtenerPersonajes(){
    this.ramS.obtenerPersonajes().subscribe( personajes => { 
      console.log(personajes);
      this.Personajes= personajes;
     } );
  }

}
