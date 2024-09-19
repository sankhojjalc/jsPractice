const fetchData = async (url, params, delay = 500) => {
  // const res = await fetch(url, {
  //   method: params.method,
  //   body: JSON.stringify(params.body),
  //   headers: JSON.stringify(params.headers),
  // });
  // const data = await res.json();
  // return data;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello-" + url + "-" + params.body);
    }, delay);
  });
};

const wrapperFetchData = (fn) => {
  const cache = [];

  return async (url, params, delay) => {
    const key = url + "-" + params.body;
    const obj = { [key]: { url, params, status: "pending", result: null } };

    // Check if the request is already pending in the cache
    const cachedItem = cache.find(
      (item) => item.hasOwnProperty(key) && item[key]["status"] === "pending"
    );

    if (cachedItem) {
      console.log("FROM IF (Cache hit for pending request)");
      return cachedItem[key]["result"];
    }

    // Otherwise, initiate the request and cache it
    console.log("FROM ELSE (New request)");
    cache.push(obj);
    try {
      // Store the promise in result so other requests can await it
      const resPromise = fn(url, params, delay);
      obj[key]["result"] = resPromise;
      const res = await resPromise;
      obj[key]["status"] = "fulfilled"; // Mark as fulfilled once resolved
      obj[key]["result"] = res; // Store the resolved result

      // After result is returned, remove the entry from the cache
      const index = cache.findIndex((item) => item.hasOwnProperty(key));
      cache.splice(index, 1);

      return res;
    } catch (error) {
      obj[key]["status"] = "failed"; // Mark as failed in case of error
      throw error;
    }
  };
};

//   const cache = [];
//   return async (url, params, delay) => {
//     const key = url + "-" + params.body;
//     const obj = { [key]: { url, params } };
//     /**
//      * obj={
//      * [key]:{
//      * url,params,status,data
//      * }
//      * }
//      */

//     // if
//     const cachedItem = cache.find(
//       (item) => item.hasOwnProperty(key) && item[key]["status"] === "pending"
//     );
//     if (cachedItem) {
//       console.log("FROM IF");
//       return cachedItem[key]["result"];
//     }
//     // else make call to fetchData
//     console.log("FROM ELSE");
//     cache.push(obj);
//     obj[key]["status"] = "pending";
//     const res = await fn(url, params, delay);
//     obj[key]["result"] = res;

//     //delete the key obj
//     const index = cache.findIndex((item) => item[key] === key);
//     cache.splice(index, 1);

//     return res;
//   };
// };

const wrapper = wrapperFetchData(fetchData);
const res1 = wrapper("/link", { body: "test" }, 5000).then((val) =>
  console.log(val)
);
const res2 = wrapper("/link2", { body: "test2" }, 5000).then((val) =>
  console.log(val)
);
const res3 = wrapper("/link", { body: "test" }, 2000).then((val) =>
  console.log(val)
);
