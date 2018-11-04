const Twit = require('twit');
const dayjs = require('dayjs');
require('dotenv').config();

class Twitter {
  constructor() {
    this.client = new Twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });
  }

  search() {
    this.client.get('search/tweets', {
      q: `${process.env.SOCIAL_SEARCH_QUERY} since:${dayjs().format('YYYY-MM-DD')}`,
      count: 100,
    }, (err, data, response) => {
      console.log(err, data, response);
    });
  }
}

module.exports = Twitter;
