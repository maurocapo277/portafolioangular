import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info : InfoPagina = {};
  cargada : boolean = false;
  equipo : any [] = [];

  constructor( private http : HttpClient) {
    console.log('Servicio de pagina listo');
    this.cargarInfo();
    this.cargarEquipo();


   }
   private cargarInfo(){
        // Leer archivos JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      
      this.cargada = true;
      this.info = resp;
    });
   }

   private cargarEquipo(){
    this.http.get('https://angular-html-16c61.firebaseio.com/equipo.json')
    .subscribe((respo : any) =>{
      this.equipo = respo;
      //console.log(respo);
    });
   }
}
