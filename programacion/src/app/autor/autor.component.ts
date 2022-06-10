import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent {
  
progra:string=""

mostrar(){
  this.progra="mostrar"
}

ocultar(){
  this.progra="ocultar"
}

