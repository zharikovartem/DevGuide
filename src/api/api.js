const baseURL = 'http://127.0.0.1:8000/api/'

const PostOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(state)
}

const GetOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(state)
}

export const testAPI = {
    getTest = (data) => {
        fetch(baseURL, PostOptions)
            .then((response) => {
                //console.log(response.json());
                return response.json();
            })
            .then((data) => {
                //console.log(data);
            })
    }
}
