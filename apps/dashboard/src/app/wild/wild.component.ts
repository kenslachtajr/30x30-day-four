import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'computers-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.scss']
})
export class WildComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToProjects() {
    this.router.navigate(['./projects']);
  }
}
