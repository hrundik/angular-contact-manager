import Contact from "./Contact";
import {MOCK_CONTACTS} from "./dummyContacts";

export default class ContactsService {
  private contacts: Contact[] = MOCK_CONTACTS.map(Contact.fromObject);

  public getContacts() {
    // return Promise to be ready for future async
    return Promise.resolve(this.contacts);
  }

  public deleteContact(contact:Contact) {
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }
}
