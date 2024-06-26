import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DistributorsService } from './distributors.service';
import { CreateDistributorDto } from './dto/create-distributor.dto';
import { UpdateDistributorDto } from './dto/update-distributor.dto';
import { ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags('distributors')
@Controller('distributors')
export class DistributorsController {
  constructor(private readonly distributorsService: DistributorsService) {}

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createDistributorDto: CreateDistributorDto) {
    return this.distributorsService.create(createDistributorDto);
  }

  @Get()
  findAll() {
    return this.distributorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distributorsService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDistributorDto: UpdateDistributorDto,
  ) {
    return this.distributorsService.update(+id, updateDistributorDto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distributorsService.remove(+id);
  }
}
