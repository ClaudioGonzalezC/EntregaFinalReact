import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth:"1460px",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: "20px",
        rowGap: "30px",
        flexWrap: "wrap",
        margin: "40px auto",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemList;
