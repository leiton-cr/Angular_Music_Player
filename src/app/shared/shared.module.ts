import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';
import { PlayListHeadComponent } from './components/play-list-head/play-list-head.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipes/order-list.pipe';
import { BrokenImgDirective } from './directives/broken-img.directive';

@NgModule({
  declarations: [
    SideBarComponent,
    UserHeaderComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    GenericSectionComponent,
    PlayListHeadComponent,
    PlayListBodyComponent,
    OrderListPipe,
    BrokenImgDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    UserHeaderComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    GenericSectionComponent,
    PlayListHeadComponent,
    PlayListBodyComponent,
    OrderListPipe,
    BrokenImgDirective
  ]
})
export class SharedModule { }
