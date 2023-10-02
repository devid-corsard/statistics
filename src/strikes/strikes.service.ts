import { Injectable } from '@nestjs/common';
import { CreateStrikeDto } from './dto/create-strike.dto';
import { UpdateStrikeDto } from './dto/update-strike.dto';

@Injectable()
export class StrikesService {
    create(createStrikeDto: CreateStrikeDto) {
        return 'This action adds a new strike';
    }

    findAll() {
        return `This action returns all strikes`;
    }

    findOne(id: number) {
        return `This action returns a #${id} strike`;
    }

    update(id: number, updateStrikeDto: UpdateStrikeDto) {
        return `This action updates a #${id} strike`;
    }

    remove(id: number) {
        return `This action removes a #${id} strike`;
    }
}
