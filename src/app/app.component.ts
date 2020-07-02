import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 0;

  urls = [
  "https://static.toiimg.com/photo/msid-72948731/72948731.jpg?161257",
  "https://specials-images.forbesimg.com/imageserve/5e0eadb74e291700061a5dd3/960x0.jpg?cropX1=0&cropX2=800&cropY1=23&cropY2=474",
  "https://www.indiewire.com/wp-content/uploads/2018/05/shutterstock_5886236av.jpg",
  ];
  url = this.urls[0];

  PLANS : Array<any> = [{name : 'FREE',price : 0,av : ['Unlimited Users',
  '150GB Storage',
  'Unlimited Public Projects',
  'Community Access'],
  na : [
    'Unlimited Private Projects',
    'Dedicated Phone Support',
    'Unlimited Free Subdomains','Monthly Status Reports]'
  ]
  }
  ,{name : 'PLUS' , price : 9,av : ['Unlimited Users',
  '150GB Storage',
  'Unlimited Public Projects',
  'Community Access',
  'Unlimited Private Projects',
  'Dedicated Phone Support',
  'Unlimited Free Subdomains'],na : [
    'Monthly Status Reports]'
  ]},
  {name : 'PRO',price : 49 , av : ['Unlimited Users',
  '150GB Storage',
  'Unlimited Public Projects',
  'Community Access',
  'Unlimited Private Projects',
  'Dedicated Phone Support',
  'Unlimited Free Subdomains',
  'Monthly Status Reports]'] , na : []}];

  FREEAV : Array<any> = ['Unlimited Users',
  '150GB Storage',
  'Unlimited Public Projects',
  'Community Access'];
  FREENA : Array<any> = [
    'Unlimited Private Projects',
    'Dedicated Phone Support',
    'Unlimited Free Subdomains','Monthly Status Reports]'
  ];

  PLUSAV : Array<any> = ['Unlimited Users',
  '150GB Storage',
  'Unlimited Public Projects',
  'Community Access',
  'Unlimited Private Projects',
  'Dedicated Phone Support',
  'Unlimited Free Subdomains'];
  PLUSNA : Array<any> = ['Monthly Status Reports]'];

  PROAV : Array<any> = ['Unlimited Users',
  '150GB Storage',
  'Unlimited Public Projects',
  'Community Access',
  'Unlimited Private Projects',
  'Dedicated Phone Support',
  'Unlimited Free Subdomains',
  'Monthly Status Reports]'];
  PRONA : Array<any> = [];

  constructor(){
  	setInterval( () => {
  	this.url = this.urls[Math.floor(Math.random() * 3)];
  	}, 1000);
  }
}
