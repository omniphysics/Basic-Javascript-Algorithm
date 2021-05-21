Temperature Converting Data Types

const convertFahrToCelsius = (far) => {
  let cel = ((far - 32) * 5) / 9;
  let result = `${cel.toFixed(4)}`;

  if (typeof far === "string" && Number(far) === NaN) {
    return `${far} is not a valid number but a string.`;
  }
  if (far && typeof far === 'object' && far.constructor === Object
  ) {
    let farObject = JSON.stringify(far)
    return `${farObject} is not a valid number but an object.`
  }
  if (far && typeof far === 'object' && far.constructor === Array) {
    let farArray = JSON.stringify(far)
    return `${farArray} is not a valid number but an array.`
  }

  if (typeof far === "boolean") {
    return `${far} is not a valid number but a boolean.`
  }
  if (isNaN(far)) {
    return `${far} is not a valid number.`

  }

  else return result
};

convertFahrToCelsius({ foo: "bar" });

// YU GI OH 

const checkYuGiOh = (n) => {
  const arr = Array.from({ length: n }, (_, index) => index + 1);
  console.log(arr);

  for (i in arr) {
    arr[i] % 2 === 0 ? (arr[i] = "Yu") : i;
    arr[i] % 3 === 0 ? (arr[i] = "Gi") : i;
    arr[i] % 5 === 0 ? (arr[i] = "Oh") : i;
    console.log(i);
  }

  if (isNaN(n)) {
    console.log(`invalid parameter: "${n}".`);
  }
};
checkYuGiOh("5");