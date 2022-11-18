import { defineStore } from "pinia";
import { userState } from "./state";




export const useUserStore = defineStore('users',{
    state:userState,
    actions: {
        setUser(userName:string):void{
            this.user = {
                name: userName
            }  
        },
        setSlogan(slogan:string):void{
            this.slogan = slogan;
        }
    }
}) 