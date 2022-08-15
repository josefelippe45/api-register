import SignInDTOInput from '../dto/SignInDTO';
import UserDTOInput from '../dto/UserDTOInput';
import UserDTOOutput from '../dto/UserDTOOutput';

export default interface UserDAO {
    create(user: UserDTOInput): Promise<UserDTOOutput>;
    findByEmail(email: string): Promise<UserDTOOutput | null>;
    findByCredentials(
        credentials: SignInDTOInput
    ): Promise<UserDTOOutput | null>;
    signIn(user: UserDTOInput): Promise<UserDTOOutput>;
    getById(id: string): Promise<UserDTOOutput>;
}
