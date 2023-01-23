import mongoose from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';
import { Role, Status, UserI } from '../types/user.types';

const userSchema = new mongoose.Schema<UserI>(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 64,
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.USER,
    },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.ACTIVE,
    },
  },
  { timestamps: true }
);
userSchema.virtual('id').get(function () {
  return this._id;
});

userSchema.plugin(mongooseLeanVirtuals);

export default mongoose.model('User', userSchema);
