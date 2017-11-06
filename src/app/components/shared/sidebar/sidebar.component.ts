import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.template.html',
  styleUrls: ['./sidebar.styles.scss']
})
export class SidebarComponent {

  constructor(private router: Router) {}
  
  ngOnInit() {
  }
}