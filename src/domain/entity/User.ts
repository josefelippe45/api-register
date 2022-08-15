import BaseError from '../error/BaseError';
import UserError from '../error/UserError';
import type { Phone } from '../type/Phone';

export default class User {
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
    ) {
        this.validatePhones();
        this.validateEmail();
    }

    private validatePhones(): void {
        const regExpPhone = /^\([0-9]{2}\)\s[0-9]{4,5}[0-9]{4}$/;
        if (!this.phones || this.phones.length === 0) {
            throw new BaseError(UserError.EMPTY_PHONE);
        }
        const phonesAreValid = this.phones.every((phone) => {
            const phoneNumber = `(${phone.ddd}) ${phone.number}`;
            return regExpPhone.test(phoneNumber);
        });
        if (!phonesAreValid) {
            throw new BaseError(UserError.INVALID_PHONES);
        }
    }

    private validateEmail(): void {
        const regExpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!regExpEmail.test(this.email)) {
            throw new BaseError(UserError.INVALID_EMAIL);
        }
    }
}
