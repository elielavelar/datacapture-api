import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { Resource } from './schemas/resource.schema'

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Post()
  create(@Body() createResourceDto: CreateResourceDto) {
    return this.resourceService.create(createResourceDto);
  }

  @Get()
  findAll(): Promise<Resource[]> {
    return this.resourceService.findAll();
  }

  @Get(':id')
  findByToken(@Param('id') token: string): Promise<Resource> {
    return this.resourceService.findByToken(token);
  }

  /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceService.findOne(+id);
  }
  */

  @Patch(':id')
  update(@Param('id') token: string, @Body() updateResourceDto: UpdateResourceDto) {
    return this.resourceService.update(token, updateResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceService.remove(+id);
  }
}
