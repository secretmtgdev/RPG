import { TMove, TStats } from '../Types';
import { ResetHealth, ResetMoves } from '../utils/MoveUtils';
class Monster {
    private _stats: TStats;
    private _moveSet: TMove[];

    constructor(moveSet: TMove[]) {
        this._moveSet = moveSet;
    }

    get stats() { return this._stats; }
    set stats(stats: TStats) { this._stats = stats; }

    get moveSet() { return this._moveSet; }
    set moveSet(moveSet: TMove[]) { this._moveSet = moveSet; }

    Heal = () => {
        ResetHealth(this);
        ResetMoves(this);
    }
}

export default Monster;