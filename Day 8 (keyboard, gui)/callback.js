const first = (num, callbackMethod) => {
  if (num === 0) {
    console.log('Feltétel igaz, callback hívás');
    callbackMethod();
  }
};
// -------------------------- ^ - ^ -^
const second = () => {
  console.log('Cica meg van hívva');
};

first(0, second);
first(0, () => { console.log('Másik callback'); });
