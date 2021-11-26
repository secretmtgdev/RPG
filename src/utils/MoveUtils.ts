import Monster from '../classes/Monster';
import { TMove, TStats } from '../Types';

const ResetHealth = (monster: Monster) => {
    let currentStats = monster.stats;
    const maxHealth = currentStats.maxHealthPoints;
    monster.stats = {
        ...monster.stats,
        healthPoints: maxHealth
    };
}

const ResetMoves = (monster: Monster) => {
    const currentMoves: TMove[] = monster.moveSet;
    const resetMoves: TMove[] = [];
    for(const move of currentMoves) {
        const maxPowerPoints = move.maxPowerPoints;
        resetMoves.push({
            ...move,
            currentPowerPoints: maxPowerPoints
        });
    }

    monster.moveSet = resetMoves;
}

export {
    ResetHealth,
    ResetMoves
}