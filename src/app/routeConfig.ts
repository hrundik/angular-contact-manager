import {RouteDefinition} from 'angular2/router'
import ContactList from './ContactList';

export const Routes = {
  contacts: {
    path: '/',
    as: 'Contacts',
    component: ContactList,
    link: ['/Contacts']
  }
};

export const APP_ROUTES: RouteDefinition[] =
  Object.keys(Routes).map((name) => Routes[name]);
