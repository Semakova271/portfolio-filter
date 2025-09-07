function ShopItem({ item }) {
  return (
    <div className="shop-item">
      <div className="shop-item-image">
        <img src={item.img} alt={item.name} />
      </div>
      
      <div className="shop-item-details">
        <h3 className="shop-item-name">{item.name}</h3>
        <span className="shop-item-color">{item.color}</span>
      </div>
      
      <div className="shop-item-price">${item.price}</div>
      
      <button className="shop-item-button">ADD TO CART</button>
    </div>
  );
}

export default ShopItem;