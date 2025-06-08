class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

// ONE WAY OF DOING THIS
// class SingletonLogger {
//   constructor() {
//     if (!SingletonLogger.instance) {
//       SingletonLogger.instance = new Logger();
//     }
//   }

//   get instance() {
//     return SingletonLogger.instance;
//   }
// }

// const logger = new SingletonLogger().instance
// export default logger;


// ANOTHER WAY OF DOING THIS
const logger = new Logger();
export default logger;