const handleErrors = (response: any) => {
  if (!response.ok) {
    return response.json().then((text: any) => {
      throw new Error(JSON.stringify(text));
    });
  }
  return response.json();
};

export const api = (
  endPoint: string,
  body: any,
  url: string,
  method: "POST" | "GET" | "PUT" | "PATCH"
) => {
  let apiBody;
  let headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  if (method === "POST" || method === "PUT") {
    apiBody = JSON.stringify(body);
  }
  if (method === "POST" || method === "PUT") {
    return fetch(`${url}/${endPoint}`, {
      method: method,
      headers,
      body: apiBody,
    }).then(handleErrors);
  } else {
    return fetch(`${url}/${endPoint}`, {
      method: method,
      headers,
    }).then(handleErrors);
  }
};

export const fetchHashnodeArticles = async () => {
  const query = `
  {
    user(username: "sudharsan") {
      publications(first: 10) {
        edges {
          node {
            posts(first: 20) {
              edges {
                node {
                  slug
                  title
                  brief
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  return api("", { query }, "https://gql.hashnode.com", "POST")
    .then((res) => {
      return {
        success: true,
        response: res,
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        success: false,
        response: JSON.parse(err.message),
      };
    });
};

export const fetchPostFromSlug = async (slug: string) => {
  const query = `{
    publication(host:"sudharsan.hashnode.dev") {
      post(slug:"${slug}"){
        title,
        content{
          markdown
          html
        },
        brief
      }
    }
  }`;

return api("", { query }, "https://gql.hashnode.com", "POST")
  .then((res) => {
    return {
      success: true,
      response: res,
    };
  })
  .catch((err) => {
    console.log(err);
    return {
      success: false,
      response: JSON.parse(err.message),
    };
  });
}
