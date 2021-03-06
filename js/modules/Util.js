function expand(data) {
  const obj = {};
  
  for(const [a, b] of data) {
    obj[a] = b;
    obj[b] = a;
  }
  
  return obj;
}

function expose(a, b) {
  for(const prop in a) b[prop] = a[prop];
}

function toDegrees(rads) {
  return rads * (180 / Math.PI);
}

export {
  expand,
  expose,
  toDegrees
};

function clean(x) {return x.replace(/[^a-zA-Z0-9 \\\[\]~`!@#$%^&*()_+-={}|:;<>,.?\/']+/g, '')}