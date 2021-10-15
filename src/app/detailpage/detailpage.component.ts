import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../services/rickandmorty.service';
import { ActivatedRoute } from  '@angular/router';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {

  Personaje:any = []; 

  constructor( private ramS: RickandmortyService,  private rA: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.rA.snapshot.paramMap.get('id');
    console.log( id );

    this.ramS.obtenerPersonaje( id ).subscribe( personaje => {
      console.log( personaje );
      this.Personaje = personaje;
    } );
  }

}
