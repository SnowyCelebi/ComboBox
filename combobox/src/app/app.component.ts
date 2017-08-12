import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  options= ['Cotton','Polyester','Cotton/Polyester','Rib Knit'];
  selectedOption = null;
  choose;
  show = false;
  onSelect(option): void {
      this.choose = option;
      this.show= ! this.show;
  }
  toggle(): void {
      this.show = !this.show;
  }
}

