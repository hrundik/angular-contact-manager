export default class Contact {
  static fromObject(obj) {
    let contact = new Contact();
    Object.assign(contact, obj);
    return contact;
  }

  constructor() {
    this.avatar = `${Math.floor(Math.random() * 15) + 1}.jpg`;
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
