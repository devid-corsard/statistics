import { Injectable } from '@nestjs/common';
import { CreateWeaponDto } from './dto/create-weapon.dto';
import { UpdateWeaponDto } from './dto/update-weapon.dto';
import { Repository } from 'typeorm';
import { Weapon } from './weapon.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WeaponsService {
    constructor(
        @InjectRepository(Weapon)
        private readonly weaponsRepository: Repository<Weapon>,
    ) {}

    async create(dto: CreateWeaponDto) {
        const weapon = this.weaponsRepository.create(dto);
        const new_weapon = await this.weaponsRepository.save(weapon);
        return new_weapon.id;
    }

    findAll() {
        return this.weaponsRepository.find({
            order: {
                name: 'ASC',
            },
            relations: { strikes: true },
        });
    }

    async findOne(id: string) {
        const weapon = await this.weaponsRepository.findOneBy({ id });
        return weapon;
    }

    async update(id: string, dto: UpdateWeaponDto) {
        const new_weapon = this.weaponsRepository.create(dto);
        const updated_weapon = await this.weaponsRepository.update(
            { id },
            new_weapon,
        );
        return updated_weapon;
    }

    async remove(id: string) {
        const res = await this.weaponsRepository.delete({ id });
        return res;
    }
}
