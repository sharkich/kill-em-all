export class Position {
  x: number;
  y: number;

  constructor(properties: Object = {}) {
    Object.assign(this, properties);
  }
}
