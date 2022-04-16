import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionComponent } from './option/option.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  slidesOpt = {};
  stories = [];
  buttonItems = [];
  posts=[];
  buttonValue = 'grid';
  constructor(private modal:ModalController) { }

  ngOnInit() {
      this.slidesOpt = {
      slidesPerView: 5.5,
    };
    this.stories = [
      { name: 'New' },
      { name: 'Android', src: '../../../../assets/imgs/circles/android.png' },
      { name: 'Angular', src: '../../../../assets/imgs/circles/angular.png' },
      { name: 'Ionic', src: '../../../../assets/imgs/circles/ionic.png' },
      { name: 'Nodejs', src: '../../../../assets/imgs/circles/nodejs.png' },
      { name: 'Laravel', src: '../../../../assets/imgs/circles/laravel.png' },
      { name: 'IOS', src: '../../../../assets/imgs/circles/ios.png' },
      { name: 'Php', src: '../../../../assets/imgs/circles/php.png' },
    ];
    this.buttonItems = [
      {value: 'grid', icon: 'grid'},
      {value: 'reels', icon: 'film'},
      {value: 'photos', icon: 'images'},
    ];
    this.posts = [
      { id: 1, url: '../../../../assets/imgs/posts/1.jpg'},
      { id: 2, url: '../../../../assets/imgs/posts/2.jpg'},
      { id: 3, url: '../../../../assets/imgs/posts/3.png'},
      { id: 4, url: '../../../../assets/imgs/posts/4.png'},
      { id: 9, url: '../../../../assets/imgs/posts/5.jpg'},
      { id: 6, url: '../../../../assets/imgs/posts/6.png'},
      { id: 5, url: '../../../../assets/imgs/posts/7.png'},
      { id: 8, url: '../../../../assets/imgs/posts/8.jpg'},
      { id: 7, url: '../../../../assets/imgs/posts/9.png'},
      { id: 10, url: '../../../../assets/imgs/posts/10.png'},
      { id: 11, url: '../../../../assets/imgs/posts/11.png'},
      { id: 12, url: '../../../../assets/imgs/posts/12.png'},
    ];
  } 

  buttonsChanged(event) {
    console.log(event.detail.value);
    this.buttonValue = event.detail.value;
  }
  async options()  { 
    const modal = await this.modal.create({
      component: OptionComponent,
      cssClass: 'custom-modal',
      swipeToClose:true
    });
    return await modal.present();
  }
}
