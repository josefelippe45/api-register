import UserDTO from '../../application/dto/UserDTO';
import User from '../../domain/entity/User';

export default class UserBuilder {
    public toDomain(user: UserDTO): User {
        const { email, name, password, phones, token } = user;
        return new User(name, email, password, phones, token);
    }

    public toDTO(user: User): UserDTO {
        const { email, name, password, phones, token } = user;
        return new UserDTO(name, email, password, phones, token);
    }
}
