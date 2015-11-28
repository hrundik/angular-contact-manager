import {Component} from 'angular2/angular2';

@Component({
    selector: 'contactList',
    template: `
<h2 class="page-header text-center">List of contacts</h2>
<p class="text-center">
  <a href="#contacts/new" class="btn btn-lg btn-outline">Add Contact</a>
</p>
<ul class="media-list row contacts-container"></ul>
    `
})
export default class ContactList {

}
