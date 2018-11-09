import Twit from 'twit';
import dotenv from 'dotenv';
import dayjs from 'dayjs';
import {Client} from './client';

export class TwitterClient extends Client{
  constructor() {
    dotenv.config();
    const client = new Twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });
    super(client);
  }

  async search(): Promise<string> {
    return await this.client.get('search/tweets', {
      q: `${process.env.SOCIAL_SEARCH_QUERY} since:${dayjs().format('YYYY-MM-DD')}`,
      count: 100,
    });
  }
}