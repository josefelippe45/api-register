import { MongoClient } from 'mongodb';
import { MONGO_URI } from '../../config/Environment';
import Connection from '../Connection';

export default class MongooseConnectionAdapter implements Connection {
    private client: MongoClient;

    constructor() {
        this.client = new MongoClient(MONGO_URI);
    }

    public async open(): Promise<void> {
        console.log(MONGO_URI);
        await this.client.connect();
    }

    public async close(): Promise<void> {
        await this.client.close();
    }
}
