import Contact from "./Contact";
import ContactsService from "./ContactsService";

describe("ContactsService", () => {
  let contactsService:ContactsService;

  beforeEach(() => {
    contactsService = new ContactsService();
  });

  it("should add and store Contact objects", (done) => {
    let contact = Contact.fromObject({
      name: "Name",
      email: "Email"
    });
    contactsService.add(contact)
      .then(() => contactsService.get(contact.id))
      .then((newContact) => {
        expect(newContact).toEqual(contact);
        done();
      })
      .catch(done.fail);
  });
});
