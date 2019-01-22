import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  displayDetails = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }
  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.log.push(this.log.length + 1);
  }
}
