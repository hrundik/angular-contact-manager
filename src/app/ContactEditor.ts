import {Component, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import Contact from './Contact';
import ContactsService from './ContactsService';

@Component({
    selector: 'contactEditor',
    directives: [FORM_DIRECTIVES],
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
    template: `
<h2 class="page-header text-center">{{isNew ? 'Create' : 'Edit'}} Contact</h2>
<form role="form" class="form-horizontal contract-form">
  <div class="form-group">
    <label class="col-sm-4 control-label">Full name:</label>
    <div class="col-sm-6">
      <input type="text" class="form-control contact-name-input"
        [(ng-model)]="contact.name">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-4 control-label">Email address:</label>
    <div class="col-sm-6">
      <input type="email" class="form-control contact-email-input"
        [(ng-model)]="contact.email">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-4 control-label">Telephone number:</label>
    <div class="col-sm-6">
      <input type="tel" class="form-control contact-tel-input"
        [(ng-model)]="contact.tel">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-4 col-sm-3">
      <button type="submit" class="btn btn-outline btn-lg btn-block">Submit</button>
    </div>
    <div class="col-sm-3">
      <a [router-link]="['/Contacts']" class="btn btn-outline btn-lg btn-block">Cancel</a>
    </div>
  </div>
</form>
    `
})
export default class ContactEditor {
  contact: Contact = new Contact();
  get isNew() {
    return !this.contact || !this.contact.id;
  }
}
