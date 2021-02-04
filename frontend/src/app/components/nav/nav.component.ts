import { Nav } from './../nav.model';
import { NavService } from './../nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menus: Nav[];

  constructor(
    private navService: NavService
  ) {
    this.menus = [];
  }

  ngOnInit(): void {
    this.navService.read().subscribe(menus => {
      this.menus = menus;
    });
  }
}
