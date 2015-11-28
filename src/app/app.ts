import {bootstrap} from 'angular2/angular2';
import ContactManagerApp from './ContactManagerApp';
import ContactsService from './ContactsService';

bootstrap(ContactManagerApp, [ContactsService]);
