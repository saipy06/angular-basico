import { Component } from '@angular/core';




@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})


export class ListadoComponent {

  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado:string = '';

  borrarHeroes(){
    this.heroeBorrado = this.heroes.pop()||'';
  }


  // constructor() {
  //   //se ejecuta antes de la renderizacion de los componentes
  // }


  // ngOnInit(): void {
  //   //inicializar cosas, servicios,
  //   console.log('OnInit');
  // }

}
