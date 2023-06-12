import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', //Used as attribute
  //selector: '.app-servers', //Used as class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = `The "${this.serverName}" server has been created`;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
