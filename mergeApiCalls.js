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
      resolve("Fetching-" + url + "-" + params.body);
    }, delay);
  });
};

const wrapperFetchData = (fn) => {
  const cache = [];

  return async (url, params, delay) => {
    const key = url + "-" + params.body;
    const obj = {
      [key]: {
        url,
        params,
        status: "pending",
        result: null,
      },
    };

    // if
    const isCachedValuePresent = cache.find(
      (item) => item.hasOwnProperty(key) && item[key]["status"] === "pending"
    );
    if (isCachedValuePresent) {
      console.log("INSIDE IF");
      return isCachedValuePresent[key]["result"];
    }

    // else
    try {
      console.log("INSIDE ELSE");
      cache.push(obj);
      const resPromise = fn(url, params, delay);
      obj[key]["result"] = resPromise;

      const result = await resPromise;
      obj[key]["result"] = result;
      obj[key]["status"] = "fulfilled";

      // delete
      const index = cache.findIndex((item) => item.url === url);
      cache.splice(index, 1);

      return result;
    } catch (error) {
      obj[key]["result"] = error;
      obj[key]["status"] = "rejected";
    }
  };
};

const wrapper = wrapperFetchData(fetchData);

wrapper("/link1", { body: "link1" }, 1000).then((val) =>
  console.log("FIRST CALL--->", val)
);
wrapper("/link2", { body: "link1" }, 200).then((val) =>
  console.log("SECOND CALL--->", val)
);
setTimeout(() => {
  wrapper("/link1", { body: "link1" }, 2000).then((val) =>
    console.log("THIRD CALL--->", val)
  );
}, 3000);
wrapper("/link1", { body: "link1" }, 1000).then((val) =>
  console.log("FOURTH CALL--->", val)
);
