import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, addToCart } from "./marketSlice";
import type { RootState } from "../../app/store";
import $ from "jquery";
import './MarketPage.scss';

export default function MarketPage() {
    const dispatch = useDispatch();
    const { items, carts, loading } = useSelector((state: RootState) => state.market);
    const total = carts.reduce((sum, item) => sum + item.price, 0);

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
                {loading ? (
                    <div className="loading">
                        <span className="spinner" /> Loading items...
                    </div>
                ) : (
                    <div className="market-items">
                        {items.map((item) => {
                            const inCart = carts.some((cartItem) => cartItem.id === item.id)

                            return (
                                <div
                                    className="market-item"
                                    key={item.id}
                                    data-tooltip={`Price: $${item.price}`}
                                >
                                    <h2>{item.name}</h2>
                                    <button
                                        onClick={() => dispatch(addToCart(item))}
                                        disabled={inCart}
                                    >
                                        {inCart ? 'Added' : 'Add to Cart'}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            <div className="cart-header">
                🛒 <span className="cart-badge">{carts.length}</span>
                <span className="cart-total">Total: ${total}</span>
            </div>
        </div>
    );
}