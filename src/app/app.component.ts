import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  input1;
  input2;
  input3;
  input4;

  ngOnInit() {
  }

  onInput(event) {
    if (event.target.value.length == 4) {
      console.log(event.target.value.length + "input")
      event.target.nextSibling.focus();
    }
  }


  onPaste(event: ClipboardEvent) {

    const clip = event.clipboardData.getData("text").trim();
    // const s = [...clip];
    // console.log(s);
    this.input1 = clip.substr(0,4);
    this.input2 = clip.substr(4,4);
    this.input3 = clip.substr(8,4);
    this.input4 = clip.substr(12,4);

  }

}
