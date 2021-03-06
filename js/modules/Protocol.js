import * as Util from './Util.js';

let pid = 9;

const DATA = [
  [++pid, 'ping'],
  [++pid, 'spawn'],
  [++pid, 'state'],
  [++pid, 'input'],
  [++pid, 'chat']
];

const PROTOCOL = Util.expand(DATA);

export default PROTOCOL;
export {
  PROTOCOL,
  DATA,
  pid
};