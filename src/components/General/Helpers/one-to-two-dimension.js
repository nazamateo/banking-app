function convertOneToTwoDimension(oneDimensionArr, numberOfElements) {
  const twoDimensionArr = [];
  while (oneDimensionArr.length)
    twoDimensionArr.push(oneDimensionArr.splice(0, numberOfElements));

  return twoDimensionArr;
}

export default convertOneToTwoDimension;
