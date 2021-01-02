function delay(delayTime) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, delayTime);
  });
}
export default delay;
