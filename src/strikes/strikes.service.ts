import { Injectable } from '@nestjs/common';
import { CreateStrikeDto } from './dto/create-strike.dto';
import { UpdateStrikeDto } from './dto/update-strike.dto';
import { Strike } from './strike.entity';
import { Repository } from 'typeorm';
import { WeaponsService } from '../weapons/weapons.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StrikesService {
    constructor(
        @InjectRepository(Strike)
        private strikesRepository: Repository<Strike>,
        private weaponsService: WeaponsService,
    ) {}
    async create(dto: CreateStrikeDto) {
        let newStrike = this.strikesRepository.create(dto);
        let weapon = await this.weaponsService.findOne(dto.weapon_id);
        newStrike.weapon = weapon;
        await this.strikesRepository.save(newStrike);
        return newStrike.id;
    }

    async findAll() {
        const strikes = await this.strikesRepository.find({
            order: { date: 'ASC' },
            relations: { weapon: true },
        });
        return strikes;
    }

    async findOne(id: string) {
        const strike = await this.strikesRepository.findOneBy({ id });
        return strike;
    }

    async update(id: string, dto: UpdateStrikeDto) {
        const new_strike = this.strikesRepository.create(dto);
        const updated_strike = await this.strikesRepository.update(
            { id },
            new_strike,
        );
        return updated_strike;
    }

    async remove(id: string) {
        const res = await this.strikesRepository.delete({ id });
        return res;
    }
}
