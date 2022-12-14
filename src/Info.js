import React from "react";
export default function Info({ brand, productType, data }) {
  const itemsList = [];
  const numberOfItems = data.length;

  function SomeOf(numberOfItems) {
    if (numberOfItems > 10) {
      numberOfItems = 10;
    }
    if (numberOfItems <= 0) {
      return <h3> No items found, please try again</h3>;
    }
    for (let i = 0; i < numberOfItems; i++) {
      itemsList.push(
        <p>Product name: {data[i].name}</p>,
        <p>Price: ${data[i].price}</p>,
        <img src={data[i].image_link} alt="product_image" class="image1" />
      );
    }
    return itemsList;
  }

  return (
    <div>
      {!data || !Array.isArray(data) ? (
        <div></div>
      ) : (
        <div>
          <h2>
            {brand} {productType} products:
          </h2>
          <p> {SomeOf(numberOfItems)} </p>
        </div>
      )}
    </div>
  );
}
