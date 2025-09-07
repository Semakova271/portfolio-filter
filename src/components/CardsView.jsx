import ShopCard from "./ShopCard";

function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map((card, index) => (
        <ShopCard key={index} card={card} />
      ))}
    </div>
  );
}

export default CardsView;