import {Component, Input} from 'angular2/angular2';

@Component({
    selector: 'simpleButton',
    template: `
<button type="{{type}}" class="btn btn-outline btn-lg {{class}}">{{label}}</button>
    `
})
export default class SimpleButton {
  @Input() type = "button";
  @Input() label;
  @Input() class;
}
