import EventEmitter from './EventEmitter.js';

const BASE_URL = 'wss://';

const encoder = new TextEncoder();
const decoder = new TextDecoder();

class Socket extends EventEmitter {
  constructor(url) {
    const ws = new WebSocket(BASE_URL + url);
    
    ws.binaryType = 'arraybuffer';
    
    ws.addEventListener('open', e => {
      this.emit('open', { event: e });
    });
    
    ws.addEventListener('close', e => {
      this.emit('close', { event: e });
    });
    
    ws.addEventListener('error', err => {
      this.emit('error', { error: err });
    });
    
    ws.addEventListener('message', e => {
      const data = decoder.decode(e.data);
        
      const id = data.substr(0, 1);
      const msg = data.slice(1);
      
      this.emit(id, { msg });
    });
    
    this.ws = ws;
  }
  
  send(data) {
    if(this.ws.readyState === 1) this.ws.send(encoder.encode(data));
  }
}

export { Socket };
export default Socket;