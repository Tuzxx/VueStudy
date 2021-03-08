function counter(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// 导出方式一
export {
  counter
}

// 导出方式二
export var number = 100;

// 导出函数/类
export function print() {
  console.log("Hello World")
  return true
}