import CRUDService from "../shared/CRUDService";
import Contact from "./Contact";
import {MOCK_CONTACTS} from "./dummyContacts";

export default class ContactsService extends CRUDService<Contact> {
  constructor() {
    super();
    this.items = MOCK_CONTACTS.map(Contact.fromObject);
  }
}
