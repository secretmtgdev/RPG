type TMove = {
    name: string;
    description: string;
    currentPowerPoints: number;
    maxPowerPoints: number;
} 

type TStats = {
    healthPoints: number;
    maxHealthPoints: number;
    attackPoints: number;
    defensePoints: number;
    speedPoints: number;
}

export type { TMove, TStats }