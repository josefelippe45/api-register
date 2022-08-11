import Http from './Http';
import HttpErrorMessages from './error/HttpErrorMessages';

export default class Router {
    constructor(readonly http: Http) {
        this.configure();
    }
    public configure(): void {
        this.http.on('*', 'get', async () => {
            return HttpErrorMessages.NOT_FOUND;
        });
    }
}
