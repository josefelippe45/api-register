import * as dotenv from 'dotenv';
dotenv.config();
import ExpressAdapter from './infra/http/adapter/ExpressAdapter';
import Router from './infra/http/Router';

const http = new ExpressAdapter();

new Router(http);

http.listen(3000);
