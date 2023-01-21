import dataMovie from "./dataMovie";
import dataProduct from "./dataProduct";
export default class Movie implements dataMovie,dataProduct  {
    constructor(
        readonly localizedName: string,
        readonly originalName: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: object,
        readonly timeInMinutes: number,
        readonly poster: string,
        readonly id: number,
        readonly price: number,
        readonly category: string,
    ){}
    
}