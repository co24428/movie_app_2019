import React from 'react';

function Food( {name, picture} ) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg"
  },
  {
    name: "Kimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F56%2FVegetable_gimbap.jpg%2F1200px-Vegetable_gimbap.jpg"
  },
  {
    name: "Shusi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F60%2FSushi_platter.jpg%2F1200px-Sushi_platter.jpg"
  },
  {
    name: "Ramen",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FB8y3SSmz4sg%2Fmaxresdefault.jpg"
  }

]

function App() {
  return (
    <div>
      <h1>Hello~~~</h1>
      <Food name="kimchi" />
      {foodILike.map(dish => (
        <Food name={dish.name} picture= {dish.image} />
      ))}
    </div>
  );
}

export default App;
