import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './about-me-mobile.component.scss']
})
export class AboutMeComponent implements OnInit {
  fullImagePath: string;
  gitHubImagePath: string;
  ngImagePath: string;
  javaScriptImagePath: string;
  html5ImagePath: string;
  css3ImagePath: string;
  nodeJSImagePath: string;
  ionicImagePath: string;
  chromeImagePath: string;
  firebaseImagePath: string;
  googleCloudPlatformImagePath: string;
  linuxImagePath: string;
  BKAImagePath: string; // true heroes

  constructor() {
    this.fullImagePath = '../../assets/images/angular-material.png';
    this.gitHubImagePath = '../../assets/images/github.png';
    this.ngImagePath = '../../assets/images/angular.png';
    this.javaScriptImagePath = '../../assets/images/javascript.png';
    this.html5ImagePath = '../../assets/images/html5.png';
    this.css3ImagePath = '../../assets/images/css3.png';
    this.nodeJSImagePath = '../../assets/images/nodeJS.png';
    this.ionicImagePath = '../../assets/images/ionic.png';
    this.chromeImagePath = '../../assets/images/chrome.png';
    this.firebaseImagePath = '../../assets/images/firebase.png';
    this.googleCloudPlatformImagePath = '../../assets/images/googleCloudPlatform.png';
    this.linuxImagePath = '../../assets/images/linux.png';
    this.BKAImagePath = '../../assets/images/bka.png';

  }

  ngOnInit() {
  }

}
