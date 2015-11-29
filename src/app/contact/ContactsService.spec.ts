import ContactsService, {NOT_FOUND, NOT_NEW} from './ContactsService';
import Contact from './Contact';

// ContactsService integration test
// (in real life the service would access server-side which should be mocked)
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

  it("should save known contact", (done) => {
    let modifiedContact;
    service.addContact(newContact)
      .then(() => {
        modifiedContact = newContact.clone();
        modifiedContact.name = "Noname";
        return service.saveContact(modifiedContact);
      })
      .then((contact) => {
        expect(contact).toEqual(modifiedContact);
        done();
      })
  });

  it("should fail when saving unknown contact", (done) => {
    newContact.id = 123;
    service.saveContact(newContact)
      .then(done.fail)
      .catch((err) => {
        expect(err).toBe(NOT_FOUND);
        done();
      });
  });
});
