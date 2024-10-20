import { Riddle } from "./riddle";

export class Room {
    constructor(
        public name:string |undefined,
        public riddleList:Riddle[],
        public key:string
    ){}
}
