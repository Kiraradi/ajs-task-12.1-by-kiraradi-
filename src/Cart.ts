import dataProduct from "./dataProduct";

export default class Cart {
    private _items: dataProduct[] = [];

    add(item: dataProduct): void {
        if (item.category === 'Movie' || item.category === 'Books' || item.category === 'Music') {
            const checkItem = this._items.some(itemCart => itemCart.id === item.id)
            if (!checkItem) {
                this._items.push(item);
            }
        } else if (item.category === 'Electronics') {
            const idItem = this._items.findIndex(itemCart => itemCart.id === item.id);
            if (idItem >= 0) {
                this._items[idItem].quantity += item.quantity;
            } else {
                this._items.push(item);
            }
        }

    }

    get items(): dataProduct[] {
        return [...this._items];
    }

    totalAmount(): number {
        if (this._items.length === 0 ) {
            return 0
        }
        const sum = this._items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
        return sum
    }

    discountedAmount(discount: number): number {
        return this.totalAmount() - discount;
    }

    deleteAnItem(id:number): void {
        const idItem = this._items.findIndex(item => item.id === id);
        if (idItem >= 0) {
            this._items.splice(idItem,1);
        }
    }
}