import {Component} from 'angular2/angular2';
import Contact from './Contact';
import ContactList from './ContactList';

@Component({
    selector: 'contactManagerApp',
    directives: [ContactList],
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
    <contactList [contacts]="contacts"></contactList>
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
  contacts = [
    {
      id: 1,
      name : 'Terrence S. Hatfield',
      tel: '651-603-1723',
      email: 'TerrenceSHatfield@rhyta.com'
    },
    {
      id: 2,
      name : 'Chris M. Manning',
      tel: '513-307-5859',
      email: 'ChrisMManning@dayrep.com'
    },
    {
      id: 3,
      name : 'Ricky M. Digiacomo',
      tel: '918-774-0199',
      email: 'RickyMDigiacomo@teleworm.us'
    },
    {
      id: 4,
      name : 'Michael K. Bayne',
      tel: '702-989-5145',
      email: 'MichaelKBayne@rhyta.com'
    },
    {
      id: 5,
      name : 'John I. Wilson',
      tel: '318-292-6700',
      email: 'JohnIWilson@dayrep.com'
    },
    {
      id: 6,
      name : 'Rodolfo P. Robinett',
      tel: '803-557-9815',
      email: 'RodolfoPRobinett@jourrapide.com'
    }
  ].map(Contact.fromObject);
}
