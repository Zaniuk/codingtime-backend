import mongoose from 'mongoose';
import config from './config';

const db = async (): Promise<void> => {
  try {
    if (config.dbUrl != null) {
      mongoose.set('strictQuery', true);
      await mongoose.connect(config.dbUrl);
      console.log('Database connected');
    } else {
      throw new Error('Database URL not found');
    }
  } catch (error) {
    throw new Error('Error connecting to database');
  }
};

export default db;
