import mongoose from 'mongoose';
import BaseRepository from './BaseRepository';

abstract class BaseService<T extends mongoose.Document> {
  protected repository: BaseRepository<T>;
  constructor(repository: BaseRepository<T>) {
    this.repository = repository;
  }

  async findById(id: string): Promise<T | null> {
    return await this.repository.findById(id);
  }

  async findAll(): Promise<T[] | []> {
    return await this.repository.findAll();
  }

  async create(item: T): Promise<T> {
    return await this.repository.create(item);
  }

  async update(id: string, item: T): Promise<T | null> {
    return await this.repository.update(id, item);
  }

  async delete(id: string): Promise<T | null> {
    return await this.repository.delete(id);
  }
}

export default BaseService;
