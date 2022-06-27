//task 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , z] = arr;
console.log(x);
console.log(y);
console.log(z);

//task 2
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let {
  names: [, name2, , name4],
  ages: [, age2, , age4],
} = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

// task 3
function mul(...param) {
  let result = 1;
  let hasNumber = false;
  for (let i = 0; i < param.length; i += 1) {
    if (!isNaN(param[i])) {
      hasNumber = true;
      result *= param[i];
    }
  }
  if (hasNumber === false) {
    return 0;
  }
  return result;
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

//task 4
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};

client.calc(123);
console.log(client.result);
console.log(typeof client.result);

// task 5

function mapBuilder(keysArray, valuesArrays) {
  const mapObject = new Map();
  for (let i = 0; i < keysArray.length; i += 1) {
    mapObject.set(keysArray[i], valuesArrays[i]);
  }
  return mapObject;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));
