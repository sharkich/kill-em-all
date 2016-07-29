import { Injectable } from '@angular/core';

import { Tower } from '../../classes/tower/tower';

@Injectable()
export class TowersService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  private lastId: number = 0;

  // Placeholder for towers
  private towers: Tower[] = [];

  constructor() {}

  getAllTowers(): Tower[] {
    return this.towers;
  }

  getTowerById(id: number): Tower {
    return this.towers
      .filter(tower => tower.id === id)
      .pop();
  }

  addTower(tower: Tower): TowersService {
    if (!tower.id) {
      tower.id = ++this.lastId;
    }
    this.towers.push(tower);
    return this;
  }

  deleteTowerById(id: number): TowersService {
    this.towers = this.towers
      .filter(tower => tower.id !== id);
    return this;
  }

  updateTowerById(id: number, properties: Object = {}): Tower {
    const tower = this.getTowerById(id);
    if (!tower) {
      return null;
    }
    Object.assign(tower, properties);
    return tower;
  }

}
