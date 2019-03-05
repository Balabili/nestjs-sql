import { Get } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PhotoService } from './photo.service';
import { Photo } from '../graphql';

@Resolver('Photo')
export class PhotoResolver {
  constructor(private readonly photoService: PhotoService) { }

  @Query()
  async all(): Promise<Photo[]> {
    return await this.photoService.findAll();
  }

  @Query()
  async one(): Promise<Photo> {
    return await this.photoService.findOne();
  }
}
