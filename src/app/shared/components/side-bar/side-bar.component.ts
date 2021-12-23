import { Component, OnInit } from '@angular/core';
import { HomeMenuItem } from '@core/models/home-menu-item.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  public mainMenu: {
    defaultOptions: Array<HomeMenuItem>;
    customOptions: Array<HomeMenuItem>;
    alternativeOptions: Array<HomeMenuItem>;
  };

  constructor() {
    this.mainMenu = {
      defaultOptions: [
        {
          name: 'Inicio',
          icon: 'uil uil-estate',
          route: ['/', 'tracks'],
        },
        {
          name: 'Buscar',
          icon: 'uil uil-search',
          route: ['/', 'history'],
        },
        {
          name: 'Biblioteca',
          icon: 'uil uil-list-ui-alt',
          route: ['/', 'library'],
        },
      ],
      alternativeOptions: [
        {
          name: 'Crear lista',
          icon: 'uil uil-file-plus-alt',
          route: ['/', 'create'],
        },
        {
          name: 'Favoritas',
          icon: 'uil uil-heartbeat',
          route: ['/', 'favorites'],
        },
      ],
      customOptions: [
        {
          name: 'Mi lista 1',
          route: ['/'],
        },
        {
          name: 'Mi lista 2',
          route: ['/', 'history'],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
