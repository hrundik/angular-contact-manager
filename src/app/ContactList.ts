import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';
import ContactView from './ContactView';
import ContactsService from './ContactsService';
import Contact from './Contact';

@Component({
    selector: 'contactList',
    directives: [ContactView],
    template: `
<h2 class="page-header text-center">List of contacts</h2>
<!--p class="text-center">
  <a href="#contacts/new" class="btn btn-lg btn-outline">Add Contact</a>
</p-->
<ul class="media-list row contacts-container">
  <li class="media col-md-6 col-lg-4" *ng-for="#contact of contacts">
    <contactView [contact]="contact">
  </li>
</ul>
    `
})
export default class ContactList {
  contacts:Contact[];
  constructor(contactsService:ContactsService) {
    contactsService.getContacts()
      .then((result) => {
        this.contacts = result;
      });
  }
}
