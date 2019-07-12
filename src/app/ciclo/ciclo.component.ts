import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() {
    console.log('constructor')
  }
  ngOnInit() {
    console.log('ngOnInit')
  }
  ngDoCheck() {
    console.log('ngDoCheck')
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }
  ngOnChanges() {
    console.log('ngOnChanges')
  }
  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
