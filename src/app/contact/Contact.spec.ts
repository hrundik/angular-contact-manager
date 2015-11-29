import Contact from './Contact';

describe("Contact", () => {
  it('should create Contact', () => {
    let obj = {
      id: 1,
      name: "Name",
      tel: "1234556",
      email: "mail@mail.com"
    };
    expect(Contact.fromObject(obj)).toEqual(jasmine.objectContaining(obj));
  });
});
