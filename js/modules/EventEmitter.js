class EventEmitter extends EventTarget {
  constructor() {
    super();
  }
  
  on(type, cb, opts = {}) {
    this.addEventListener(type, cb, opts);
  }
  
  once(type, cb, opts = {}) {
    opts.once = true;
    
    this.on(type, cb, opts);
  }
  
  emit(type, data) {
    const event = new CustomEvent(type, { detail: {} });
    
    for(const key in data) event.detail[key] = data[key];
    
    this.dispatchEvent(event);
  }
}

export { EventEmitter };
export default EventEmitter;