import type { Phone } from '../../domain/entity/type/Phone';

export default class UserDTO {
    constructor(
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly phones: Phone[],
        readonly token: string
    ) {}
}
