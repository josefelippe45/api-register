import { model, Schema } from 'mongoose';
import User from '../../../domain/entity/User';

const PhoneSchema = new Schema(
    {
        ddd: { type: String, required: true },
        number: { type: String, required: true },
    },
    {
        _id: false,
    }
);

export const UserSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        token: { type: String, required: true, unique: true },
        phones: [PhoneSchema],
        lastLogin: { type: Date, default: Date.now() },
    },
    {
        timestamps: true,
    }
);

const UserModel = model<User>('User', UserSchema);

export default UserModel;
