import {Component, Input} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import Contact from './Contact';
import ContactsService from './ContactsService';

@Component({
    selector: 'contactView',
    directives: [ROUTER_DIRECTIVES],
    template: `
<div class="thumbnail">
  <img class="media-object" src="img/faces/{{contact.avatar}}">
</div>
<div class="media-heading">
  <h3>
    {{contact.name}}
    <small>
      <a [router-link]="['/EditContact', {id: contact.id}]"><span class="glyphicon glyphicon-pencil"></span></a>
      <a (click)="deleteContact(contact)">
        <span class="glyphicon glyphicon-trash"></span>
      </a>
    </small>
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

  constructor(private contactsService:ContactsService) {}

  deleteContact (contact:Contact) {
    this.contactsService.deleteContact(contact);
  }
}
