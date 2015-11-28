import {Component, Input} from 'angular2/angular2';
import Contact from './Contact';

@Component({
    selector: 'contactView',
    template: `
<div class="thumbnail">
  <img class="media-object" src="img/faces/{{contact.avatar}}">
</div>
<div class="media-heading">
  <h3>
    {{contact.name}}
    <!--small>
      <a href="#contacts/edit/%id%"><span class="glyphicon glyphicon-pencil"></span></a>
      <a href="#contacts/delete/%id%" class="delete-contract">
        <span class="glyphicon glyphicon-trash"></span>
      </a>
    </small-->
  </h3>
</div>
<div class="media-body contact-details">
  <dl>
    <dt>Phone Number:</dt>
    <dd>{{contact.tel}}</dd>
    <dt>Email:</dt>
    <dd>{{contact.email}}</dd>
  </dl>
</div>
<hr>
    `,
    styles: [`
.media-body.contact-details {
  display: block;
  width: auto;
}
    `]
})
export default class ContactView {
  @Input() contact: Contact;
}
