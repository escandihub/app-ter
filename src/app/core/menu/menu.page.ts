import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages =  [
    {
      title: 'Inicio',
      url:'/menu/inicio'
    },
    {
      title: 'Terneros',
      url:'/menu/ternero'
    },
    {
      title: 'Madre',
      url:'/menu/vaca'
    },
    {
      title: 'Padre',
      url:'/menu/toro'
    },
    {
      title: 'Configuracion',
      url:'/menu/configuracion'
    },
  ];

  selectedPath = '';
  
  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      if(event && event.url){
        this.selectedPath = event.url
      }
    });
  }
  ngOnInit() {
  }

}

