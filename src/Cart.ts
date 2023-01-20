import dataProduct from "./dataProduct";

export default class Cart {
    private _items: dataProduct[] = [];

    add(item: dataProduct): void {
        this._items.push(item);
    }

    get items(): dataProduct[] {
        return [...this._items];
    }
}