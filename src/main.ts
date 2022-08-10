import ExpressAdapter from '@shared/infra/http/adapter/ExpressAdapter';
import Router from '@shared/infra/http/Router';

const http = new ExpressAdapter();

new Router(http);

http.listen(3000);
