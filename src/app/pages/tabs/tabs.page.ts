import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
selectedTab = 'home';
@ViewChild('tabs') tabs: IonTabs;
  constructor() { }

  ngOnInit() {
  }
  changeTab(ev:any) {
    this.selectedTab = this.tabs.getSelected();
  }
}
