import Contact from './Contact';

describe("Contact", () => {
  const contactSource = {
    id: 1,
    name: "Name",
    tel: "1234556",
    email: "mail@mail.com"
  };
  let contact:Contact;

  beforeEach(() => {
      contact = Contact.fromObject(contactSource);
  });

  it('should create Contact', () => {
    expect(contact).toEqual(jasmine.objectContaining(contactSource));
  });

  it('should clone properly', () => {
    expect(contact.clone()).toEqual(contact);
  });

  it('should really clone', () => {
    let clone = contact.clone();
    clone.name = "Noname";
    expect(clone.name).toEqual("Noname");
    expect(contact.name).toEqual(contactSource.name);
  });
});
