
interface UserState {
    user: {
        name:string
    } | null,
    slogan: string
}


export const userState = ():UserState => {
    return {
        slogan: '',
        user: null
    }
}