import { PartialType } from '@nestjs/mapped-types';
import { CreateStrikeDto } from './create-strike.dto';

export class UpdateStrikeDto extends PartialType(CreateStrikeDto) {}
