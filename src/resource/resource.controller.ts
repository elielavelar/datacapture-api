import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResourceService } from './resource.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Post()
  create(@Body() createResourceDto: CreateResourceDto) {
    return this.resourceService.create(createResourceDto);
  }

  @Get()
  findAll() {
    return this.resourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //if (typeof id === 'string')
    //return this.resourceService.findOne(id);
    return this.resourceService.findByToken(id);
  }

  @Get(':token')
  findByToken(@Param('token') token: string) {
    console.log('token', token);
    return this.resourceService.findByToken(token);
  }

  @Patch(':id')
  update(
    @Param('id') token: string,
    @Body() updateResourceDto: UpdateResourceDto,
  ) {
    return this.resourceService.update(token, updateResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') token: string) {
    return this.resourceService.remove(token);
  }
}
