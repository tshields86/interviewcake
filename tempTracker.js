/* https://www.interviewcake.com/question/javascript/temperature-tracker */

class TempTracker {
  constructor() {
    this.occurrences = new Map();
    this.size = 0;
    this.max = -Infinity;
    this.min = Infinity;
    this.sum = 0
    this.mean;
    this.maxOccurrences = 0;
    this.mode = null;
  }

  insert(temp) {
    this.occurrences.set(temp, (this.occurrences.get(temp) || 0) + 1);

    this.size++;
    this.max = Math.max(this.max, temp);
    this.min = Math.min(this.min, temp);
    this.sum = this.sum += temp;

    this.#setMean();
    this.#setMode(temp);
  }

  getMax() {
    if (!this.size) return null;
    return this.max;
  }

  getMin() {
    if (!this.size) return null;
    return this.min;
  }

  getMean() {
    if (!this.size) return null;
    return this.mean;
  }

  getMode() {
    if (!this.size) return null;
    return this.mode;
  }

  #setMean = () => {
    this.mean = this.sum / this.size;
  }

  #setMode = temp => {
    const tempOccurrences = this.occurrences.get(temp);
    if (tempOccurrences > this.maxOccurrences) {
      this.maxOccurrences = tempOccurrences;
      this.mode = temp;
    }
  }
}

const tempTracker = new TempTracker();
tempTracker.insert(50);
console.log(tempTracker.getMax());
console.log(tempTracker.getMin());
console.log(tempTracker.getMean());
console.log(tempTracker.getMode());
tempTracker.insert(80);
console.log(tempTracker.getMax());
console.log(tempTracker.getMin());
console.log(tempTracker.getMean());
console.log(tempTracker.getMode());
tempTracker.insert(80);
console.log(tempTracker.getMax());
console.log(tempTracker.getMin());
console.log(tempTracker.getMean());
console.log(tempTracker.getMode());