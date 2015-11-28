import {Component, provide} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';

import Contact from './contact/Contact';
import ContactList from './contact/components/ContactList';
import ContactsService from './contact/ContactsService';

import {Routes, APP_ROUTES} from "./routeConfig"

@RouteConfig(APP_ROUTES)
@Component({
    selector: 'contactManagerApp',
    directives: [ContactList, ROUTER_DIRECTIVES],
    providers: [
      ROUTER_PROVIDERS,
      provide(LocationStrategy, {useClass: HashLocationStrategy})
    ],
    template: `
<header class="cm-header">
	<div class="container">
	<h1>Contact Manager</h1>
	<p>Simple Angular 2 example application</p>
	</div>
</header>
<div class="container">
	<div class="row">
	<div class="col-xs-12 main-container">
    <router-outlet></router-outlet>
	</div>
	</div>
</div>
    `,
    styles: [`
.cm-header {
  position: relative;
  padding: 30px 15px;
  font-size: 20px;
  color: #cdbfe3;
  text-align: center;
  text-shadow: 0 1px 0 rgba(0,0,0,.1);
  background-color: #6f5499;
  background-image: -webkit-linear-gradient(top, #563d7c 0%, #6f5499 100%);
  background-image: linear-gradient(to bottom, #563d7c 0%, #6f5499 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);
}

.cm-header h1 {
  margin-top: 0;
  color: #fff;
}

.cm-header p {
  margin-bottom: 0;
  font-weight: 300;
  line-height: 1.4;
}
    `]
})
export default class ContactManagerApp {
  routes = Routes;
  constructor() {}
}
