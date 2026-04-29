import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor
    super(sqft);
    this._floors = floors;
  }

  // Getter
  get floors() {
    return this._floors;
  }

  // Override Abstract method implementation
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
