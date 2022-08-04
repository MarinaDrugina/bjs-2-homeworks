function testCase() {
    let phoneClock = new AlarmClock();
  
    phoneClock.addClock(phoneClock.getCurrentFormattedTime(), () => console.log('С добрым утром!'), 1);
  
    phoneClock.addClock(new Date(new Date().getTime() + 60000).toLocaleTimeString().slice(0, -3), () => {
        console.log('Пора вставать!');
        phoneClock.removeClock(phoneClock.id);
    }, 2);
  
    phoneClock.addClock(new Date(new Date().getTime() + 120000).toLocaleTimeString().slice(0, -3), () => {
        console.log('Вставай уже наконец!');
        phoneClock.printAlarms();
        phoneClock.clearAlarms();
        phoneClock.printAlarms();
    }, 3);
  
    phoneClock.printAlarms();
    
    phoneClock.start();
  }
  
  testCase();