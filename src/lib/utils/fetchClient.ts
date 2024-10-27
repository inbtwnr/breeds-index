export function fetchClient (url) {
    return fetch(url, {
        headers: {
            'x-api-key': process.env.CAT_API_KEY
        }
    }).then((response) => response.json());
}