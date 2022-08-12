import type { Phone } from '../../application/type/Phone';

export default class User {
    constructor(
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly phones: Phone[],
        readonly token: string
    ) {
        this.validatePhones();
    }

    private validatePhones(): void {
        const regExpPhone = /^\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}$/;
        if (!this.phones || this.phones.length === 0) {
            throw new Error('User must have at least one phone');
        }
        const phonesAreValid = this.phones.every((phone) => {
            const phoneNumber = `(${phone.ddd}) ${phone.number}`;
            return regExpPhone.test(phoneNumber);
        });
        if (!phonesAreValid) {
            throw new Error('All phones must be valid');
        }
    }
}
