export const NOT_FOUND = "NOT_FOUND";
export const NOT_NEW = "NOT_NEW";

interface Id {
  id: Number;
}

export default class CRUDService<T extends Id> {
  protected items: T[] = [];
  private ID_COUNTER = 0;

  public getAll() {
    // return Promise to be ready for future async
    return Promise.resolve(this.items);
  }

  public get(id:Number):Promise<T> {
    let item = this.items.find((item) => item.id == id);
    if (item) {
      return Promise.resolve(item);
    } else {
      return <Promise<any>>Promise.reject(NOT_FOUND);
    }
  }

  public add(item:T) {
    if (item.id) {
      return Promise.reject(NOT_NEW);
    }

    item.id = this.ID_COUNTER++;
    this.items.push(item);

    return Promise.resolve();
  }

  public save(changedItem:T):Promise<T> {
    let item = this.items.find((item) => {
      if (item.id == changedItem.id) {
        Object.assign(item, changedItem);
        return true;
      }
      return false;
    });
    if (!item) {
      return <Promise<any>> Promise.reject(NOT_FOUND);
    }
    return Promise.resolve(item);
  }

  public delete(item:T) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      return Promise.resolve();
    }

    return Promise.reject(NOT_FOUND);
  }
}
