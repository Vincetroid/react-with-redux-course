import axios from 'axios';

const KEY = 'AIzaSyAthgI_5gh2F5KtBRoszXc9RtKyzPR8ZRE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});