import { describe, expect, it } from '@jest/globals';
import reducer, { setItems, addToCart } from "./marketSlice";
import type { Item } from './types';

describe("marketSlice", () => {
    it("should set items", () => {
        const mockItems: Item[] = [
            { id: 1, name: "Book", price: 1000 },
            { id: 2, name: "Pen", price: 100 },
        ];

        const newState = reducer(undefined, setItems(mockItems));
        expect(newState.items).toEqual(mockItems);
    });

    it("should add item to cart", () => {
        const mockItems: Item[] = [
            { id: 1, name: "Book", price: 1000 },
            { id: 2, name: "Pen", price: 100 },
        ];

        let state = reducer(undefined, setItems(mockItems));
        state = reducer(state, addToCart(mockItems[0]));

        expect(state.carts).toHaveLength(1);
        expect(state.carts[0].name).toBe("Book");
        expect(state.carts[0].price).toBe(1000);
    });
});