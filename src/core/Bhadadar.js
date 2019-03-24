import Dexie from 'dexie';
import * as API from '../api';
import { synchronousPromiseResolver } from '../helpers';

class BhadaDar {
  constructor() {
    this.db = new Dexie(BhadaDar.DB);
    this.db.version(2).stores({
      places: '++id,en',
      bhadadar: '++,start,end',
      preferences: 'key',
    });
  }

  async pullRecords(totalItems) {
    const promises = Array(totalItems).fill(true);
    promises.forEach((item, index) => {
      promises[index] = () => API.getRecords(index);
    });

    return await synchronousPromiseResolver(promises);
  }

  async createBhadadar(recordsCollections) {
    const records = [];
    recordsCollections.forEach((record) => {
      records.push(...record.data);
    });
    this.createDocuments(BhadaDar.COLLECTION_BHADADAR, records);
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
        await this.clearDocuments(BhadaDar.COLLECTION_PLACES);
        await this.createDocuments(BhadaDar.COLLECTION_PLACES, places.data);
        await this.setPreferences('meta', meta);
        const records = await this.pullRecords(places.totalItems);
        await this.clearDocuments(BhadaDar.COLLECTION_BHADADAR);
        await this.createBhadadar(records);
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
    if (!this.db[collection]) {
      return;
    }
    return this.db[collection].clear();
  }

  createDocuments(collection, records) {
    if (!this.db[collection]) return;
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
BhadaDar.COLLECTION_PLACES = 'places';
BhadaDar.COLLECTION_PREFERENCES = 'preferences';
BhadaDar.COLLECTION_BHADADAR = 'bhadadar';

export default BhadaDar;
