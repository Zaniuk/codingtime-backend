import { Document } from 'mongoose';
import BaseRepository from '../../common/BaseRepository';
import User from '../model/user.model';
import { UpdateUserI, UserI } from '../types/user.types';
class UserRepository extends BaseRepository<UserI & Document> {
  constructor() {
    super(User);
  }

  override async update(id: string, user: UpdateUserI): Promise<UserI | null> {
    try {
      return await User.findByIdAndUpdate(id, user, { new: true });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
export default UserRepository;
