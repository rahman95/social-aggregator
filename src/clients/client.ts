export abstract class Client {
  client: any
  constructor(client: any) {
    this.client = client;
  }
  abstract search(): object
}