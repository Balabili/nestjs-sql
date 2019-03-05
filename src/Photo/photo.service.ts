import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from '../graphql';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) { }

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async findOne(): Promise<Photo> {
    return await this.photoRepository.findOne({ id: 1 });
  }
}
