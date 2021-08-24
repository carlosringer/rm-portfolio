import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DataService implements OnInit {
  constructor() { }
  
  name: String;

  ngOnInit() {
    this.name = "Carlos Ringer"
  }
}
