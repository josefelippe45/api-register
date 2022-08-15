import UserDTOInput from '../../application/dto/UserDTOInput';
import { Phone } from '../../domain/type/Phone';
import User from '../../domain/entity/User';

export default class UserBuilder {
    private readonly id: string;
    private readonly name: string;
    private readonly email: string;
    private readonly password: string;
    private readonly phones: Phone[];
    private readonly token: string;
    private readonly createdAt: Date;
    private readonly updatedAt: Date;
    private readonly lastLogin: Date;

    constructor(readonly user: User) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.phones = user.phones;
        this.token = user.token;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
        this.lastLogin = user.lastLogin;
    }
    public toDTOOutput(): User {
        return new User(
            this.id,
            this.name,
            this.email,
            this.password,
            this.phones,
            this.token,
            this.createdAt,
            this.updatedAt,
            this.lastLogin
        );
    }

    public toDTOInput(): UserDTOInput {
        return new UserDTOInput(
            this.name,
            this.email,
            this.password,
            this.phones
        );
    }
}
