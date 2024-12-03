import { Component } from '@angular/core';

@Component({
  selector: 'app-zone1',
  templateUrl: './zone1.component.html',
  styleUrls: ['./zone1.component.css'],
})
export class Zone1Component {
  popupHidden = true;
  showpopup() {
    this.popupHidden = false;
  }
  hidepopup() {
    this.popupHidden = true;
  }
}
