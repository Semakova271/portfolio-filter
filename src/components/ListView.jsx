import ShopItem from "./ShopItem";

function ListView({ items }) {
  return (
    <div className="list-view">
      {items.map((item, index) => (
        <ShopItem key={index} item={item} />
      ))}
    </div>
  );
}

export default ListView;