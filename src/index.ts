import {TwitterClient} from './clients/twitter';

const twitter = new TwitterClient();

const tweets = twitter.search();

tweets.then((response) => {
  console.log(response.data);
});
