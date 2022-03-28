import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-test',
  templateUrl: './menu-test.component.html',
  styleUrls: ['./menu-test.component.scss']
})
export class MenuTestComponent implements OnInit {
  menuToggle = false;

  constructor() { }

  ngOnInit(): void {
  }

}
