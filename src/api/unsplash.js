import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0063a635d2f321aa0cb0fb9c4b26abb62443db82f3863077545195fbfe3a46ec'
    }
});