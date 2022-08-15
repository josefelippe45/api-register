import type { Phone } from '../../domain/type/Phone';

export default class UserDTOInput {
    constructor(
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly phones: Phone[]
    ) {}
}
