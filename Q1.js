// 1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610、 987

const Fibonacci = (p) => {
  // 先定義前三個數
  let list = [0, 1, 1];
  for (let i = 3; i <= p; i++) {
    list[i] = list[i - 2] + list[i - 1];
  }
  console.log(list[p]);
  return list[p];
};

Fibonacci(3);
