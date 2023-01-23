import UserRepository from '../repository/user.repository';
import { UserI } from '../types/user.types';
import BaseService from '../../common/BaseService';

class UserService extends BaseService<UserI> {
  constructor() {
    super(new UserRepository());
  }
}

export default UserService;
