import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', //Used as attribute
  //selector: '.app-servers', //Used as class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
