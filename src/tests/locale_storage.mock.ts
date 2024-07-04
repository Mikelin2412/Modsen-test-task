class LocalStorageMock {
  private store: { [key: string]: string };
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  key = (i: number): string => {
    const values = Object.values(this.store);
    return values[i];
  };

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

export default LocalStorageMock;
