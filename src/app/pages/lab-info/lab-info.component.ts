import { Component, OnInit } from '@angular/core';
import * as AOS  from 'aos';
@Component({
  selector: 'app-lab-info',
  templateUrl: './lab-info.component.html',
  styleUrls: ['./lab-info.component.css']
})
export class LabInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
