import { Item } from '../features/market/types'

type Props = {
  item: Item
  inCart: boolean
  onAdd: () => void
}

export default function ItemCard({ item, inCart, onAdd }: Props) {
  return (
    <div className="market-item" data-tooltip={`Price: $${item.price}`}>
      <h2>{item.name}</h2>
      <button onClick={onAdd} disabled={inCart}>
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  )
}