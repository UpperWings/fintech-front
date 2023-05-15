const HOST = "https://fintech-back.fly.dev"

async function request(url, config) {
  const fetchResponse = await fetch(url, config).catch((err) => {
    throw new Error(err);
  });

  if (!fetchResponse.ok) {
    const { status, statusText, body } = fetchResponse;
    const text = await fetchResponse.text();
    throw new Error(`${status} ${statusText} ${body} ${text}`);
  }

  return fetchResponse;
}

export const addOutput = async (mensage, value) => {
  const host = HOST;
  const path = '/output';
  const url = host + path;
  const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mensage,
      value,
    }),
  };
  // console.log(config)
  const result = request(url, config);
  return result;
};

export const getAll = async () => {
  const host = HOST;
  const path = '/output';
  const url = host + path;
  const fetchResponse = await request(url);
  const data = await fetchResponse.json();
  return data.outputs;
};

export const deleteOutPut = async (id) => {
  const host = HOST;
  const path = 'output';
  const url = `${host}/${path}/${id}`;
  const config = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  await request(url, config);
  // console.log(responses);
};

export const editOutPut = async (id, mensage, value) => {
  const host = HOST;
  const path = 'output';
  const url = `${host}/${path}/${id}`;
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mensage,
      value,
    }),
  };
  // console.log(config)
  request(url, config);
};
