import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;//significa el ! que el piensa que no puede
  //existir, sin embargo le decimos que si existe
buscar(event:string){
 const valor=this.txtBuscar.nativeElement.value;
 this.txtBuscar.nativeElement.value='';
 if(valor.trim().length===0){
  return;
 }
console.log(valor);
this.gif.buscarGifs(valor);

  

}
constructor(private gif:GifsServiceService){

}
}
