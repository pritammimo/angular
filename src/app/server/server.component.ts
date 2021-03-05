import { Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online{
    color:white
  }`]
})
export class ServerComponent {

serverId:number=10;
serverstatus:string='offline'
serverName='Testserver';
servers=['TestServer','TestServer2'];
constructor(){
  this.serverstatus=Math.random()>0.5?'online':'offline';
}
getServerStatus(){
  return this.serverstatus
  this.servers.push(this.serverName);
}
getColor(){
  return this.serverstatus === 'online'? 'green':'red'
}

}
