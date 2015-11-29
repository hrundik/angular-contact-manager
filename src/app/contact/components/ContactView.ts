import {Component, Input} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import Contact from '../Contact';
import ContactsService from '../ContactsService';

@Component({
    selector: 'contactView',
    directives: [ROUTER_DIRECTIVES],
    template: `
<div class="contactView">
<div class="thumbnailWrapper">
  <div class="thumbnail">
    <img class="media-object" src="img/faces/{{contact.avatar}}">
  </div>
</div>
<div class="media-heading">
  <h3 class="name">
    {{contact.name}}
  </h3>
  <div class="actions">
    <a [router-link]="['/EditContact', {id: contact.id}]"><span class="glyphicon glyphicon-pencil"></span></a>
    <a href="#" (click)="deleteContact(contact)">
      <span class="glyphicon glyphicon-trash"></span>
    </a>
  </div>
</div>
<div class="media-body contact-details">
  <dl>
    <dt>Phone Number:</dt>
    <dd>{{contact.tel}}</dd>
    <dt>Email:</dt>
    <dd>{{contact.email}}</dd>
  </dl>
</div>
</div>
    `,
    styles: [`
.media-body.contact-details {
  display: block;
  width: auto;
}
.contactView {
  height: 200px;
  border: 1px solid #573E7D;
  padding: 10px;
  border-radius: 10px;
}
.thumbnailWrapper {
  height: 100%;
  float: left;
  margin-right: 25px;
  line-height: 180px
}
.thumbnail {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 0px;
}
.name {
  margin-top: 10px;
}
.actions {
  position: absolute;
  bottom: 10px;
  right: 30px;
}
.actions .glyphicon {
  margin-left: 10px;
}
a:hover,
a:focus,
a.active {
  border-color: #563d7c;
}
    `]
})
export default class ContactView {
  @Input() contact: Contact;

  constructor(private contactsService:ContactsService) {}

  deleteContact (contact:Contact) {
    this.contactsService.delete(contact);
  }
}
