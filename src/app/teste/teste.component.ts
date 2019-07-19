import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  arr = [
    {
      nome: 'Cristian',
      idade: 32,
      cursos: [
        'Técnico em informática',
        'Sistemas para Internet',
      ]
    },
    {
      nome: 'José',
      idade: 22,
      cursos: []
    }
  ];

  aba: string = 'home'

  ativo: boolean = true
  tamanhoFonte: number = 10;

  meuObj: any = {
    pessoa: {
      nome: 'Cristian',
      sobrenome: null,
      //idade: 32,
      // animais: [
      //   'gato',
      //   'cachorro'
      // ]
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
