export default class Contact {
  static fromObject(obj) {
    let contact = new Contact();
    Object.assign(contact, obj);
    if (!contact.avatar) {
      contact.avatar = `${Math.floor(Math.random() * 15) + 1}.jpg`;
    }
    return contact;
  }

  id: Number;
  name: String;
  tel: String;
  email: String;
  avatar: String;

  clone() {
    let contact = new Contact();
    Object.assign(contact, this);
    return contact;
  }
}
