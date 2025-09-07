function ShopCard({ card }) {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  };

  return (
    <div 
      className="shop-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="shop-card-header">
        <h3 className="shop-card-name">{card.name}</h3>
        <span className="shop-card-color">{card.color}</span>
      </div>
      
      <div>
        <img src={card.img} alt={card.name} className="shop-card-image" />
      </div>
      
      <div className="shop-card-footer">
        <span className="shop-card-price">${card.price}</span>
        <button className="shop-card-button">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ShopCard;