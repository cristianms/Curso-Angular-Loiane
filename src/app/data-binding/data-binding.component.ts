import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://www.google.com'

  getValor() {
    return 1
  }

  urlImagem = 'http://lorempixel.com/200/100'

  constructor() { }

  ngOnInit() {
  }

}
