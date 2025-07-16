import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Item } from './types'

interface State {
  items: Item[]
  carts: Item[]
  loading: boolean
}

const initialState: State = {
  items: [],
  carts: [],
  loading: false,
}

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    fetchItems: (s) => {
      s.loading = true
    },
    setItems: (s, a: PayloadAction<Item[]>) => {
      s.items = a.payload
      s.loading = false
    },
    addToCart: (s, a: PayloadAction<Item>) => {
      s.carts.push(a.payload)
    },
  },
})

export const { fetchItems, setItems, addToCart } = marketSlice.actions
export default marketSlice.reducer
