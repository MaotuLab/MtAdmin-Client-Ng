import { Component } from '@angular/core';

@Component({
  selector: 'base-layout',
  templateUrl:'./base.layout.component.html',
  styleUrls: ['./base.layout.component.css']
})
export class BaseLayout {
  isCollapsed: boolean = true;
 
}