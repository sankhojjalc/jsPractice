const fetchData = async (url, method = "GET", rest) => {
  const response = await fetch(url, { method, ...rest });
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
};

const callWithRetries = (fn, maxRetries = 3) => {
  let count = 0;
  return async (url) => {
    while (count < maxRetries) {
      try {
        const data = await fn(url);
        console.log("data", data);
        return data;
      } catch (error) {
        console.log("inside catch", error);
        count++;
      }
    }
  };
};

const data = callWithRetries(fetchData, 3);
data("https://jsonplaceholder.typicode.com/posts/1");
// data("https://jsonplaceholder.typicode.com/poss/1"); // throws error
