class SevenSegment {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    }

  setDigit(num) {
    this.element.textContent = num;
    }
}

class DigitalClock {
  constructor(hour1, hour2, min1, min2, sec1, sec2) {
    this.hour1 = new SevenSegment(hour1);
    this.hour2 = new SevenSegment(hour2);
    this.min1 = new SevenSegment(min1);
    this.min2 = new SevenSegment(min2);
    this.sec1 = new SevenSegment(sec1);
    this.sec2 = new SevenSegment(sec2);
}

  updateTime() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    this.hour1.setDigit(hour[0]);
    this.hour2.setDigit(hour[1]);
    this.min1.setDigit(minute[0]);
    this.min2.setDigit(minute[1]);
    this.sec1.setDigit(second[0]);
    this.sec2.setDigit(second[1]);
}

start() {
  const tick = () => {
    this.updateTime();
      setTimeout(tick, 1000);
    };
      tick();
    }
}

const clock = new DigitalClock("hour-1", "hour-2", "minute-1", "minute-2", "second-1", "second-2");
clock.start();

