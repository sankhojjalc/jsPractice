const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }
  return response.json();
};

const fetchWrapper = (maxRetries = 3) => {
  let count = 1;
  return async (url) => {
    while (count <= maxRetries) {
      try {
        const data = await fetchData(url);
        return data;
      } catch (error) {
        console.log(`API failed, Retrying ... ${count}/${maxRetries}`);
        count++;
      }
    }
  };
};

const result = fetchWrapper();

result("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    if (!res) {
      console.log("API FAILED");
    } else {
      console.log(res);
    }
  })
  .catch((e) => console.log("e---->", e));

// https://jsonplaceholder.typicode.com/posts/1   ----> throws error
