const enLang = require('./en');

class Language {
  constructor() {
    this._type = 'en';
    this._lang = new Map();
    this._here = ['en'];
  }

  load(type = null) {
    this._type = type || this._type;
    let lang = null;
    if (this._here.includes(this._type)) {
      switch (this._type) {
        default:
          lang = enLang;
          break;
      }
      this.setLanguage(lang);
      return Promise.resolve(lang).then(r => r);
    }
    return Promise.reject(new Error('Unable to load language file'))
  }

  setLanguage(lang) {
    this._lang.set(this._type, {});
    this._fillLang(this._lang.get(this._type), Object.assign({}, enLang, lang));
  }

  get() {
    return this._lang.get(this._type);
  }

  static get() {
    return Language.getInstance().get();
  }

  _fillLang(langContainer, langs) {
    Object.keys(langs).forEach((key) => {
      if (typeof langs[key] === 'string') {
        langContainer[key] = langs[key]; // eslint-disable-line
      } else {
        langContainer[key] = {}; // eslint-disable-line
        this._fillLang(langContainer[key], langs[key]);
      }
    });
  }

  static getInstance() {
    if (Language.INSTANCE === null) {
      Language.INSTANCE = new Language();
    }
    return Language.INSTANCE;
  }
}

Language.INSTANCE = null;
export default Language;
