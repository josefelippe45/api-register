import UserDTO from '../../application/dto/UserDTO';
import { Phone } from '../../domain/type/Phone';
import User from '../../domain/entity/User';

export default class UserBuilder {
    private name: string;
    private email: string;
    private password: string;
    private phones: Phone[];
    private token: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(readonly user: User | UserDTO) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.phones = user.phones;
        this.token = user.token;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
    }
    public toEntity(): User {
        return new User(
            this.name,
            this.email,
            this.password,
            this.phones,
            this.token,
            this.createdAt,
            this.updatedAt
        );
    }

    public toDTO(): UserDTO {
        return new UserDTO(
            this.name,
            this.email,
            this.password,
            this.phones,
            this.token,
            this.createdAt,
            this.updatedAt
        );
    }
}
