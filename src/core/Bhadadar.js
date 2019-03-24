import Dexie from 'dexie';
import * as API from '../api';

class BhadaDar {
  constructor() {
    this.db = new Dexie(BhadaDar.DB);
    this.db.version(2).stores({
      places: '++id,en',
      // records: '',
      preferences: 'key',
    });
    window.db = this.db;
    // this.collection = {
    //   places: this.db.collection('places'),
    //   records: this.db.collection('records'),
    //   preferences: this.db.collection('preferences'),
    // };
    // window.collection = this.collection;
  }

  async boot() {
    try {
      const meta = await BhadaDar.fetchMeta();
      let metaPrefernce = await this.getPreferences('meta');

      if (!metaPrefernce) {
        await this.setPreferences('meta', meta);
        metaPrefernce = {};
      }
      if (metaPrefernce.lastUpdatedData !== meta.lastUpdatedData) {
        const places = await BhadaDar.fetchPlaces();
        await this.clearDocuments('places');
        await this.createDocuments('places', places.data);
        await this.setPreferences('meta', meta);
      }
      return {};
    } catch (error) {
      throw error;
    }
  }

  getPreferences(key, defaulValue) {
    return this.db.preferences.get({ key }).then(data => (data || {}).value || defaulValue);
  }

  async setPreferences(key, value) {
    await this.db.preferences.delete(key);
    return this.db.preferences.add({ key, value });
  }

  static fetchMeta() {
    return API.getMeta().then(response => response.data);
  }

  static fetchPlaces() {
    return API.fetchPlaces().then(response => response.data);
  }

  clearDocuments(collection) {
    return this.db[collection].clear();
  }

  createDocuments(collection, records) {
    return this.db[collection].bulkAdd(records);
  }

  getPlacesByQuery(query) {
    return this.db.places.filter(item => item.en.includes(query)).toArray();
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
