export class CreateStrikeDto {
    readonly weapon_id: string;
    readonly date: string;
    readonly launched_count: number;
    readonly intercepted?: number;
}
