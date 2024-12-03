import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Zone1Component } from './zone1/zone1.component';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [Zone1Component, PopupComponent],
  imports: [
    CommonModule
  ],
  exports: [Zone1Component]
})
export class ZonesModule { }
