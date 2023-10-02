import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StrikesService } from './strikes.service';
import { CreateStrikeDto } from './dto/create-strike.dto';
import { UpdateStrikeDto } from './dto/update-strike.dto';

@Controller('strikes')
export class StrikesController {
  constructor(private readonly strikesService: StrikesService) {}

  @Post()
  create(@Body() createStrikeDto: CreateStrikeDto) {
    return this.strikesService.create(createStrikeDto);
  }

  @Get()
  findAll() {
    return this.strikesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.strikesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStrikeDto: UpdateStrikeDto) {
    return this.strikesService.update(+id, updateStrikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.strikesService.remove(+id);
  }
}
