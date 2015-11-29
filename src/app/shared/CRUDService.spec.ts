import CRUDService, {NOT_FOUND, NOT_NEW} from './CRUDService';

class Item {
  constructor(public id:Number = 0, public name:String = "") {}
  clone() {
    return new Item(this.id, this.name);
  }
}

// CRUDService integration test
// (in real life the service would access server-side which should be mocked)
describe('CRUDService', () => {
  let service:CRUDService<Item>;
  let newItem:Item;

  beforeEach(() => {
    service = new CRUDService<Item>();
    newItem = new Item(0, "Aaa");
  });

  it("should return array", (done) => {
    service.getAll().then(
      (result) => {
          expect(Array.isArray(result)).toBe(true);
          done();
      }
    );
  });

  it("should add item", (done) => {
    service.add(newItem)
      .then(() => service.getAll())
      .then((contacts) => {
        expect(contacts).toContain(newItem);
        done();
      });
  });

  it("should fail on adding existing item", (done) => {
    let item:Item = new Item(123, "Aaa");
    service.add(item)
      .then(done.fail)
      .catch((err) => {
        expect(err).toEqual(NOT_NEW);
        done();
      });
  });

  it("should return proper item", (done) => {
    service.add(newItem)
      .then(() => service.get(newItem.id))
      .then((contact) => {
        expect(contact).toBe(newItem);
        done();
      })
  });

  it("should fail when asking for unknown item", (done) => {
    service.get(1000)
      .then(done.fail)
      .catch((err) => {
        expect(err).toEqual(NOT_FOUND);
        done();
      });
  });

  it("should save known item", (done) => {
    let modifiedContact;
    service.add(newItem)
      .then(() => {
        modifiedContact = newItem.clone();
        modifiedContact.name = "Noname";
        return service.save(modifiedContact);
      })
      .then((contact) => {
        expect(contact).toEqual(modifiedContact);
        done();
      })
  });

  it("should fail when saving unknown item", (done) => {
    newItem.id = 123;
    service.save(newItem)
      .then(done.fail)
      .catch((err) => {
        expect(err).toBe(NOT_FOUND);
        done();
      });
  });

  it("should delete known item", (done) => {
    service.add(newItem)
      .then(() => service.delete(newItem))
      .catch(done.fail)
      .then(() => service.get(newItem.id))
      .then(done.fail)
      .catch((err) => {
        expect(err).toBe(NOT_FOUND);
        done();
      });
  });

  it("should report error when trying to delete unknown item", (done) => {
    service.delete(newItem)
      .then(done.fail)
      .catch((err) => {
        expect(err).toBe(NOT_FOUND);
        done();
      })
  });
});
