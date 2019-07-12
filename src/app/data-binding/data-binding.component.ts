import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://www.google.com'
  urlImagem = 'http://lorempixel.com/200/100'
  valorDoCampo: string = ''
  valorSalvo: string = ''
  isMouseOver: boolean = false
  nomeCurso: string = 'Curso de Angular'

  getValor() {
    return 1
  }
  botaoClicado() {
    alert('Teste botaoClicado')
  }
  onKeyUp(evento: KeyboardEvent) {
    this.valorDoCampo = (<HTMLInputElement>evento.target).value
  }
  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  constructor() { }

  ngOnInit() {
  }

}
