import zango from 'zangodb';
import * as API from '../api';

class BhadaDar {
  constructor() {
    this.db = new zango.Db(BhadaDar.DB, { places: [], records: [], preferences: ['key', 'value'] });
    this.collection = {
      places: this.db.collection('places'),
      records: this.db.collection('records'),
      preferences: this.db.collection('preferences'),
    };
  }

  setPreferences(key, value) {
    this.db.collection.insert({ key, value });
  }

  static fetchPlaces() {
    return API.fetchPlaces().then(response => response.data);
  }

  createRecords(collection, records) {
    return this.collection[collection].insert(records);
  }

  static getInstance() {
    if (BhadaDar.INSTANCE) {
      return BhadaDar.INSTANCE;
    }
    BhadaDar.INSTANCE = new BhadaDar();
    return BhadaDar.INSTANCE;
  }
}
BhadaDar.DB = 'bhadadar';
BhadaDar.COLLECTION_PLACES = null;
export default BhadaDar;
