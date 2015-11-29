import {Component} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import SimpleButton from './../../shared/components/SimpleButton';

import ContactView from './ContactView';
import ContactsService from './../ContactsService';
import Contact from './../Contact';

@Component({
    selector: 'contactList',
    directives: [ContactView, ROUTER_DIRECTIVES, SimpleButton],
    template: `
<h2 class="page-header text-center">List of contacts</h2>
<p class="text-center">
  <simpleButton [router-link]="['/AddContact']" label="Add Contact">
</p>
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
    contactsService.getAll()
      .then((result) => {
        this.contacts = result;
      });
  }
}
