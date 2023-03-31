import { Component } from '@angular/core';
import { GifsServiceService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial(){
    return this.histori.historial;
  }
  constructor(private histori:GifsServiceService){

  }
  buscar(query:string){
    this.histori.buscarGifs(query)
  }

}
