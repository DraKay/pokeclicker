import { Pokeball as PokeballType, Currency } from '../GameConstants';
import Item from './Item';
import { ShopOptions } from './types';

export default class PokeballItem extends Item {
    type: PokeballType;

    constructor(type: PokeballType, basePrice: number, currency: Currency = Currency.money, options?: ShopOptions, displayName?: string) {
        super(PokeballType[type], basePrice, currency, options, displayName, undefined, 'pokeball');
        this.type = type;
    }

    gain(amt: number) {
        App.game.pokeballs.gainPokeballs(this.type, amt);
    }
    
    get description(): string {
        return this._description || `A ball for catch Pokémon. Can be bought in shops or find in dungeons.`;
    }
}
