import { defineStore } from "pinia";
import { state } from "./state";


export const useGamesStore = defineStore('games',{
    state,
    actions: {
        addNewGame: function(game: Game):void {
            this.games.push(game);
        },
        deleteGame: function (gameId: string): Game {
            let result = this.games.filter(x=>x.id == gameId)[0]
            this.games = this.games.filter(x=>x.id != gameId)
            return result;
        },
        selectGame: function (game: Game): Game[] {
            this.selected.push(game);
            return this.selected;
        },
        unselectGame: function (gameId: string): Game {
            let result = this.selected.filter(x=>x.id == gameId)[0]
            this.selected = this.selected.filter(x=>x.id != gameId)
            return result;
        }
    },
    getters:{}
})