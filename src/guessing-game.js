class GuessingGame {
    constructor() {
      this.min = null;
      this.max = null;
      this.currentGuessing = null;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.currentGuessing = Math.round((this.max + this.min) / 2);
      return this.currentGuessing;
    }

    lower() {
      this.max = this.currentGuessing;
    }

    greater() {
      this.min = this.currentGuessing;
    }
}

module.exports = GuessingGame;
