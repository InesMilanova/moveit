import { priceLimits, RANGES } from "../constants/constants";

export class PriceService {
  constructor(distance, volume, atticOrBasement) {
    this.distance = distance;
    this.volume = volume;
    this.atticOrBasement = atticOrBasement;
  }

  getRangeBasedOnDistance(distance) {
    let rangeType = RANGES.BELOW_FIFTY;

    if (distance >= 50 && distance < 100) {
      rangeType = RANGES.ABOVE_FIFTY;
    }

    if (distance >= 100) {
      rangeType = RANGES.ABOVE_HUNDRED;
    }

    return rangeType;
  }

  getDistancePrice() {
    const rangeType = this.getRangeBasedOnDistance(this.distance);
    const { startPrice, perKm } = priceLimits[rangeType];
    return startPrice + this.distance * perKm;
  }

  getNumberOfCars() {
    return Math.ceil((this.atticOrBasement + this.volume) / 49);
  }

  checkIfMovingPiano() {
    return this.isPiano ? 5000 : 0;
  }
}
