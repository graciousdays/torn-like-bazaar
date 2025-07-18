import { fetchItems, setItems } from './marketSlice'
import type { Item } from './types'
import { call, put, takeEvery } from 'redux-saga/effects'

function* loadItems() {
  const items: Item[] = yield call(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Energy Drink', price: 500 },
          { id: 2, name: 'Book of Crimes', price: 1000 },
          { id: 3, name: 'Orchid', price: 1500 },
        ])
      }, 1000)
    })
  })
  yield put(setItems(items))
}

export default function* marketSaga() {
  yield takeEvery(fetchItems.type, loadItems)
}
