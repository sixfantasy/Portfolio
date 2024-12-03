import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
 @Output()
 closeEvent: EventEmitter<any> = new EventEmitter();
 closePopup(){
    this.closeEvent.emit();
 }
}
