import {RouteDefinition} from 'angular2/router'
import ContactList from './ContactList';
import ContactEditor from './ContactEditor'

export const Routes = {
  contacts: {
    path: '/',
    as: 'Contacts',
    component: ContactList
  },
  newContact: {
    path: '/new/',
    as: 'AddContact',
    component: ContactEditor
  },
  editContact: {
    path: '/edit/:id',
    as: 'EditContact',
    component: ContactEditor
  }
};

export const APP_ROUTES: RouteDefinition[] =
  Object.keys(Routes).map((name) => Routes[name]);
