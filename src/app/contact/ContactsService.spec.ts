import ContactsService, {NOT_FOUND, NOT_NEW} from './ContactsService';
import Contact from './Contact';

describe('ContactsService', () => {
  let service:ContactsService;
  let newContact:Contact;

  beforeEach(() => {
    service = new ContactsService();
    newContact = Contact.fromObject({
      name: "Aaa"
    });
  });

  it("should return array", (done) => {
    service.getContacts().then(
      (result) => {
          expect(Array.isArray(result)).toBe(true);
          done();
      }
    );
  });

  it("should add contact", (done) => {
    service.addContact(newContact)
      .then(() => service.getContacts())
      .then((contacts) => {
        expect(contacts).toContain(newContact);
        done();
      });
  });

  it("should fail on adding existing contact", (done) => {
    let contact = Contact.fromObject({
      id: 123
    });
    service.addContact(contact)
      .then(done.fail)
      .catch((err) => {
        expect(err).toEqual(NOT_NEW);
        done();
      });
  });

  it("should return proper contact", (done) => {
    service.addContact(newContact)
      .then(() => service.getContact(newContact.id))
      .then((contact) => {
        expect(contact).toBe(newContact);
        done();
      })
  });

  it("should fail when asking for unknown contact", (done) => {
    service.getContact(1000)
      .then(done.fail)
      .catch((err) => {
        expect(err).toEqual(NOT_FOUND);
        done();
      });
  });
});
