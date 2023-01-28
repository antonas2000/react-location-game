
export function generateData(data) {
  return {
    headers: {'Content-type': 'application/json; charset=UTF-8'},
    body: JSON.stringify(data)
  }
}

export function makeRequest(apiUrl, options, apiUrlSuffix = '') {
  return fetch(apiUrl + apiUrlSuffix, options)
    .then(response => {
      if (response.status !== 200) return Promise.reject(new Error(response.statusText));
      const isJson = response.headers.get('content-type')?.includes('application/json');
      return isJson ? response.json() : response;
    })
    .catch(error => Promise.reject(error.message));
}
