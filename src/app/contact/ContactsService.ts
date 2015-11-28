import Contact from "./Contact";
import {MOCK_CONTACTS} from "./dummyContacts";

export const NOT_FOUND = "NOT_FOUND";
export const NOT_NEW = "NOT_NEW";

export default class ContactsService {
  private contacts: Contact[] = MOCK_CONTACTS.map(Contact.fromObject);
  private ID_COUNTER = this.contacts.length;

  public getContacts() {
    // return Promise to be ready for future async
    return Promise.resolve(this.contacts);
  }

  public getContact(id:Number):Promise<Contact> {
    let contact = this.contacts.find((contact) => contact.id == id);
    if (contact) {
      return Promise.resolve(contact);
    } else {
      return <Promise<any>>Promise.reject(NOT_FOUND);
    }
  }

  public addContact(contact:Contact) {
    if (contact.id) {
      return Promise.reject("NOT_NEW");
    }

    contact.id = this.ID_COUNTER++;
    this.contacts.push(contact);

    return Promise.resolve();
  }

  public saveContact(changedContact:Contact) {
    let contact = this.contacts.find((contact) => {
      if (contact.id == changedContact.id) {
        Object.assign(contact, changedContact);
        return true;
      }
      return false;
    });
    return Promise.resolve(contact);
  }

  public deleteContact(contact:Contact) {
    let index = this.contacts.indexOf(contact);
    if (index > -1) {
      this.contacts.splice(index, 1);
      return Promise.resolve();
    }

    return Promise.reject(NOT_FOUND);
  }
}
