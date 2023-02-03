import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'life-cycle-app';

  //Storing Value Of Input Element
  inputText : string = '';
  destroy : boolean = true;

  OnSubmit(inputElement : HTMLInputElement){

    this.inputText = inputElement.value;

  }

  
  destroyComponent(){
    this.destroy = false;
  }

}
