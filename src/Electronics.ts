import dataProduct from "./dataProduct";
import dataElectronics from "./dataElectronics";

export default class Electronics implements dataElectronics, dataProduct {
    constructor(
        readonly originalName: string,
        readonly year: number,
        readonly country: string,
        readonly company: string,
        readonly id: number,
        readonly price: number,
        readonly category: string,
        readonly quantity: number,
    ){}
}