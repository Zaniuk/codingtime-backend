import { Model, Document } from 'mongoose';

abstract class BaseRepository<T extends Document> {
  protected model: Model<T>;
  constructor(schemaModel: Model<T>) {
    this.model = schemaModel;
  }

  async findAll(): Promise<T[]> {
    return await this.model.find().lean({ virtuals: true });
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findById(id).exec();
  }

  async create(item: T): Promise<T> {
    try {
      // eslint-disable-next-line new-cap
      const newItem = new this.model(item);
      await newItem.save();
      return await newItem.toObject({ virtuals: true });
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async update(id: string, item: T): Promise<any> {
    return true;
  }

  async delete(id: string): Promise<T | null> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}

export default BaseRepository;
