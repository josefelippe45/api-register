// TODO remover dependencia do domain
import type { Phone } from '../type/Phone';

export default class UserDTO {
    constructor(
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly phones: Phone[],
        readonly token: string
    ) {}
}
