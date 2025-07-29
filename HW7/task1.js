function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

function handleNum(num, onEven, onOdd) {
  if (num % 2 === 0) {
    onEven();
  } else {
    onOdd();
  }
}

handleNum(7, handleEven, handleOdd);