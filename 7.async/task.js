class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
  
    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Невозможно идентифицировать будильник! Параметр id не передан');
        }
    
        let index = this.alarmCollection.findIndex(item => item.id === id);
        if (index !== -1) {
            console.error('Будильник с таким id уже существует');
            return;
        }
    
        this.alarmCollection.push({time, callback, id});
    }
  
    removeClock(id) {
        let index = this.alarmCollection.findIndex(item => item.id === id);
    
        if (index === -1) {
            return false;
        } else {
            this.alarmCollection.splice(index, 1);
            return true;
        }
    }
  
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }
  
    start() {
      let checkClock = phoneClock => {
            if (phoneClock.time === this.getCurrentFormattedTime()) {
            phoneClock.callback();
            }
        };
    
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                    this.alarmCollection.forEach(phoneClock => checkClock(phoneClock));
                }, 1000);
        }
    };
  
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
            }
    };
  
    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведен на ${item.time}`));
    }
  
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
  }