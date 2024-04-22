function calculateSum(value: number) {
  const startTime = Date.now();

  // 計算
  let result = null;
  const isOdd = value % 2 === 1;

  if (isOdd) {
    result = -Math.floor(value / 2) + 1;
  } else {
    result = value / 2 + 2;
  }

  const totalSpentTime = Date.now() - startTime;

  return { result, totalSpentTime };
}

export default calculateSum;
