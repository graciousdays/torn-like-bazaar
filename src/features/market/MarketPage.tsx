import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, addToCart } from "./marketSlice";
import type { RootState } from "../../app/store";
import $ from "jquery";
import './MarketPage.scss';

export default function MarketPage() {
    const dispatch = useDispatch();
    const { items, carts } = useSelector((state: RootState) => state.market);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    useEffect(() => {
        const $targets = $('[data-tooltip]');
        $targets.off('mouseenter mouseleave'); // Clean previous bindings
        $targets.hover(function () {
            $(this).append(`<div class="tooltip">${$(this).data('tooltip')}</div>`);
        }, function () {
            $(this).find('.tooltip').remove();
        });
    }, [items]);

    return (
        <div className="market-page">
            <h1>Torn Like Bazaar</h1>
            <div className="market-items">
                {Array.isArray(items) && items.map((item) => (
                    <div className="market-item" key={item.id} data-tooltip={`Price: $${item.price}`}>
                        <h2>{item.name}</h2>
                        <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div className="cart-header">
                🛒 <span className="cart-badge">{carts.length}</span>
            </div>
        </div>
    );
}