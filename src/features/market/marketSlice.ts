import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "./types";

interface State {
    items: Item[];
    carts: Item[];
}

const initialState: State = {
    items: [],
    carts: [],
};

const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        fetchItems: () => {},
        setItems: (s, a: PayloadAction<Item[]>) => { s.items = a.payload },
        addToCart: (s, a: PayloadAction<Item>) => { s.carts.push(a.payload) }
    }
})

export const { fetchItems, setItems, addToCart } = marketSlice.actions
export default marketSlice.reducer
