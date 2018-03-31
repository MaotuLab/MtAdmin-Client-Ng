import { Component } from '@angular/core';

@Component({
  selector: 'base-layout',
  templateUrl:'./base.layout.component.html',
  styleUrls: ['./base.layout.component.css']
})
export class BaseLayout {
  isCollapsed: boolean = true;
  page :Number= 1;
  isLoading :boolean= false;
  projects  =[
    {id:1,title:'Mt Cola',imageUrl:'/assets/images/test/image5.jpg'},
    {id:1,title:'Mt Admin',imageUrl:'/assets/images/test/image1.jpg'},
    {id:1,title:'Mt Shop',imageUrl:'/assets/images/test/image7.jpg'},
    {id:1,title:'Mt Api',imageUrl:'/assets/images/test/image3.jpg'},
    {id:1,title:'Mt Share',imageUrl:'/assets/images/test/image4.jpg'},

    {id:1,title:'Mt Sales',imageUrl:'/assets/images/test/image6.jpg'},

  ]
  ngOnInit() { 
    this.isLoading = true; 
    setTimeout(()=>{
      this.projects.map(item=>{
        item.imageUrl=`url(${item.imageUrl})` 
      })
      this.isLoading =false;
    },1000)
  }
}