import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationstatus="no server was created"
serverName='Testserver';
servercreated=false;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }
onCreateServer(){
  this.allowNewServer=true;
  
  this.servercreated=true;
  this.serverCreationstatus='server was created! Name is'+this.serverName;
}
}
