import UserDTO from '../dto/UserDTO';

export default interface UserDAO {
    create(user: UserDTO): Promise<void>;
    findByEmail(email: string): Promise<UserDTO | null>;
}
