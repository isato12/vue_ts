

const apikey = 'F2a4KSsNsukH6NJYmM8E1G8fW21zhXJh';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
    .then((resp) => resp.json()
    .then((body) => console.log({ body })))
    .catch(err => console.warn(err))
