
export interface GameState {
    games: Game[],
    selected: Game[]
}

export const state = ():GameState => {
    return {
        games: [],
        selected: []
    }
}