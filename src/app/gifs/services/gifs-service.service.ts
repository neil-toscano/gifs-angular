
import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gift, gify } from '../interfaces/interfacegifs';


@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
private _historial:string[]=[];
public resultados:gift[]=[];
private apiKey:string='ukZOP6CTl3rknyGF4HkyZoiUsc2VQyE4';
get historial(){
  return [...this._historial];
}
constructor(private http:HttpClient) {
  this._historial=JSON.parse(localStorage.getItem('historial')!)|| [];
  if(this._historial[this._historial.length-1]){
    this.buscarGifs(this._historial[this._historial.length-1]);

  }
  

 }
buscarGifs(query:string){
  const texto=query.trim().toLowerCase();
  if(!this._historial.includes(texto)){
    this._historial.unshift(texto);
    localStorage.setItem('historial',JSON.stringify(this._historial));

    this._historial=this._historial.splice(0,10);
  }
  const params=new HttpParams( )
  .set('api_key',this.apiKey)
  .set('limit','20')
  .set('q',query);
  this.http.get<gify>(`https://api.giphy.com/v1/gifs/search`,{params})
    .subscribe((resp)=>{
      this.resultados=resp.data;
      console.log(resp.data);
      

    })
    console.log(this._historial);
    

  }

}
