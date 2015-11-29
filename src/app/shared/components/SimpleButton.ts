import {Component, Input} from 'angular2/angular2';

@Component({
    selector: 'simpleButton',
    template: `
<button type="{{type}}" class="btn btn-outline btn-lg {{class}}">{{label}}</button>
    `,
    styles: [`
.btn-outline {
  color: #563d7c;
  background-color: transparent;
  border-color: #563d7c;
}

.btn-outline:hover,
.btn-outline:focus,
.btn-outline:active {
  color: #fff;
  background-color: #563d7c;
  border-color: #563d7c;
}
      `]
})
export default class SimpleButton {
  @Input() type = "button";
  @Input() label;
  @Input() class;
}
