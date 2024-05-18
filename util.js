const flattenObject = (obj = {}) => {
  let flattened = {};

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(flattened, flattenObject(obj[key]));
    } else {
      flattened[key] = obj[key] || "";
    }
  }

  return flattened;
};

const docs = {
  name: "flattenObject",
  description: "Flatten any json object",
  input: {
    type: "Object",
    description: "Input the json you would like to flatten",
    example: {
      name: "John",
      address: {
        house: 1,
        city: "DC",
        section: {
          area: 54,
          path: true,
        },
        status: "pending",
      },
      protein: "beef",
    },
  },
  output: {
    type: "Object",
    description: "Flattened object",
    example: {
      name: "John",
      house: 1,
      city: "DC",
      area: 54,
      path: true,
      status: "pending",
      protein: "beef",
    },
  },
};

module.exports = { flattenObject, docs };
