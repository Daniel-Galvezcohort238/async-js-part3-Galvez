class ImplementingAnAlarmAPI {
  constructor() {
    console.log('IMPLEMENTING AN ALARM API------------------------------------------------')

    this.example1();
  }

  example1() {
    const output = document.querySelector("#output");
    const button = document.querySelector("#set-alarm");
    
    function setAlarm() {
      setTimeout(() => {
        output.textContent = "Wake up!";
      }, 1000);
    }
    
    button.addEventListener("click", setAlarm);
    
  }

  example2() {
    function alarm(person, delay) {
      return new Promise((resolve, reject) => {
        if (delay < 0) {
          throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
          resolve(`Wake up, ${person}!`);
        }, delay);
      });
    }
  }

  
}

class UsingTheAlarmApi {
  constructor() {
    console.log('USING THE ALARM API-------------------------------------------------')
  
    this.example1();
  }

  example1() {
    const name = document.querySelector("#name");
    const delay = document.querySelector("#delay");
    const button = document.querySelector("#set-alarm2");
    const output = document.querySelector("#output2");

    function alarm(person, delay) {
      return new Promise((resolve, reject) => {
        if (delay < 0) {
          throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
          resolve(`Wake up, ${person}!`);
        }, delay);
      });
    }

    button.addEventListener("click", () => {
      output.textContent = '';
      alarm(name.value, delay.value)
        .then((message) => (output.textContent = message))
        .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
    });

  }
}

class UsingAsyncAndAwaitWithTheAlarmApi {
  constructor() {
    console.log('USING ASYNC AND AWAIT WITH THE ALARM API------------------------------------');

    this.example1();
  }

  example1() {
    const name = document.querySelector("#name3");
    const delay = document.querySelector("#delay3");
    const button = document.querySelector("#set-alarm3");
    const output = document.querySelector("#output3");

    function alarm(person, delay) {
      return new Promise((resolve, reject) => {
        if (delay < 0) {
          throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
          resolve(`Wake up, ${person}!`);
        }, delay);
      });
    }

    button.addEventListener("click", async () => {
      try {
        const message = await alarm(name.value, delay.value);
        output.textContent = message;
      } catch (error) {
        output.textContent = `Couldn't set alarm: ${error}`;
      }
    });

  }
}

// const implementingAnAlarmApi = new ImplementingAnAlarmAPI();

// const usingTheAlarmApi = new UsingTheAlarmApi();

const usingAsyncAndAwaitWithTheAlarmApi = new UsingAsyncAndAwaitWithTheAlarmApi();