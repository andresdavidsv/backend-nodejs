const asyncCallback = function (cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, 'Hello World');
    } else {
      return cb(null, 'Hello Error');
    }
  }, 2000);
};

asyncCallback((error, msg) => {
  if (error) {
    console.log('error', errror);
  } else {
    console.log('message', msg);
  }
});
