import { Injectable } from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resource, ResourceDocument } from './schemas/resource.schema';

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel(Resource.name) private resourceModel: Model<ResourceDocument>,
  ) {}

  async create(createResourceDto: CreateResourceDto): Promise<Resource> {
    const createdResource = new this.resourceModel(createResourceDto);
    return createdResource.save();
  }

  async findAll(): Promise<Resource[]> {
    return this.resourceModel.find().exec();
  }

  async findByToken(token: string): Promise<Resource> {
    return this.resourceModel.findOne({ token }).exec();
  }

  async findOne(id: string): Promise<Resource> {
    return this.resourceModel.findById(id).exec();
  }

  update(token: string, updateResourceDto: UpdateResourceDto) {
    return this.resourceModel.updateOne({ token }, updateResourceDto);
  }

  remove(token: string) {
    return this.resourceModel.deleteOne({ token });
  }
}
