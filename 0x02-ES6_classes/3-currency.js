export default class Currency {
  constructor(code, string) {
    this._code = code;
    this._string = string;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get string() {
    return this._string;
  }

  set string(newString) {
    this._string = newString;
  }

  displayFullCurrency() {
    return `${this._string} (${this._code})`;
  }
}
