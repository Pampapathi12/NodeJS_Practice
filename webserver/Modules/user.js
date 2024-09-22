const events = require('events')

module.exports = class extends events.EventEmitter {
  constructor(){
    super(); // it is going to call eventemitter constructor of base class
  }

}