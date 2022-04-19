import { Injectable } from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Resource, ResourceDocument } from './schemas/resource.schema'

@Injectable()
export class ResourceService {

  constructor(@InjectModel( Resource.name) private resourceModel: Model<ResourceDocument>){}

  create(createResourceDto: CreateResourceDto) {
    console.log( createResourceDto )
    return 'This action adds a new resource';
  }

  findAll() {
    return `This action returns all resource`;
  }

  async findByToken(token: string): Promise<Resource> {
    return this.resourceModel.findById(token);
  }

  findOne(id: number) {
    return `This action returns a #${id} resource`;
  }

  update(id: number, updateResourceDto: UpdateResourceDto) {
    return `This action updates a #${id} resource`;
  }

  remove(id: number) {
    return `This action removes a #${id} resource`;
  }
}
