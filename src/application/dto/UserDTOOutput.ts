import { Phone } from '../../domain/type/Phone';

export default class UserDTOOutput {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly phones: Phone[],
        readonly token: string,
        readonly createdAt: Date,
        readonly updatedAt: Date,
        readonly lastLogin: Date
    ) {}
}
