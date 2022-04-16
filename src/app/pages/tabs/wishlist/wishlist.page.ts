import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  slideOpts: any = {};
  slides: any[] = [];
  activeTab = 0;
  activities: any[] = [];

  constructor() { }

  ngOnInit() {
    this.slides = [
      {id: 1, name: 'All activity'},
      {id: 2, name: 'Likes', notifications: 32},
      {id: 3, name: 'Comments', notifications: 13},
      {id: 4, name: 'Mentions'},
    ];
    this.slideOpts = {    
      slidesPerView: 0,
      slideShadows: true
    };
    this.activities = [
      {id: 1, username: 'joaovitor_rss', user_profile: 'assets/imgs/2.png', time: '1 min', activity: 'follow'},
      {id: 2, username: 'erickmiller', user_profile: 'assets/imgs/6.png', time: '5 mins', activity: 'comment', comments: 'Great content without a doubt. I am your big fan of you.', post: 'assets/imgs/posts/12.png'},
      {id: 3, username: 'dlv_n', user_profile: 'assets/imgs/4.png', time: '1d', activity: 'follow'},
      {id: 4, username: 'nikita.chaurasia.14', user_profile: 'assets/imgs/3.png', time: '1w', activity: 'follow'},
      {id: 5, username: 'iq.code', user_profile: 'assets/imgs/5.png', time: '5 mins', activity: 'comment', comments: 'Nice design. It\'s good to see different layouts and design for such commons elements. Good job!.', post: 'assets/imgs/posts/11.png'},
      {id: 6, username: 'er_vinodbhargav', user_profile: 'assets/imgs/1.png', time: '3w', activity: 'follow'},
    ];
  }

  changeTab(index) {
    this.activeTab = index;
  }

  likeComment(item) {
    item.like = !item?.like;
  }

}
