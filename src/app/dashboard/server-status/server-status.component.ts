import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host:{
    class: 'status'
  }
})
export class ServerStatusComponent implements OnInit{
  currentStatus : 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);
  
  ngOnInit(){
    const interval = setInterval(()=>{
      let rnd = Math.random();
      if(rnd<0.5){
        this.currentStatus = 'online';
      }else if(rnd<0.9){
        this.currentStatus = 'offline';
      }else{
        this.currentStatus = 'unknown';
      }
    },5000);
    this.destroyRef.onDestroy(()=>{
      clearInterval(interval);
    })
  }

}
