//input
const obj = [
  {
    key: "Sample 1",
    data: "Data 1",
  },
  {
    key: "Sample 1",
    data: "Data 1",
  },
  {
    key: "Sample 2",
    data: "Data 2",
  },
  {
    key: "Sample 1",
    data: "Data 1",
  },
  {
    key: "Sample 3",
    data: "Data 1",
  },
  {
    key: "Sample 4",
    data: "Data 1",
  },
];

// output

const output = {
  "Sample 1": [
    {
      key: "Sample 1",
      data: "Data 1",
    },
    {
      key: "Sample 1",
      data: "Data 1",
    },
    {
      key: "Sample 1",
      data: "Data 1",
    },
  ],
  "Sample 2": [
    {
      key: "Sample 2",
      data: "Data 2",
    },
  ],
  "Sample 3": [
    {
      key: "Sample 3",
      data: "Data 1",
    },
  ],
  "Sample 4": [
    {
      key: "Sample 4",
      data: "Data 1",
    },
  ],
};

const func = (obj) => {
  const outputObj = {};
  obj.map((i) =>
    !outputObj[i.key] ? (outputObj[i.key] = [i]) : outputObj[i.key].push(i)
  );

  return outputObj;
};

console.log(func(obj));
