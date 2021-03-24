import React from "react";

export default function ProductList() {
  return (
    <section>
      <ul>
        <li>
          <img src="./imgs/ball.png" alt="" height="50px" width="50px" />
          <h2>Soccer ball</h2>
          <span>$44.00</span>
          <p>The best soccer ball ever!</p>
          <button>Add To Cart</button>
        </li>
        <li>
          <img src="./imgs/tube.png" alt="" height="50px" width="50px" />
          <h2>Tubing Raft</h2>
          <span>$624.00</span>
          <p>Have some extreme fun with this tube!</p>
          <button>Add To Cart</button>
        </li>
        <li>
          <img src="./imgs/woodenSet.png" alt="" height="50px" width="50px" />
          <h2>Chess board and pieces</h2>
          <span>$499.00</span>
          <p>Hand-crafted from the finest Mahoganey wood</p>
          <button>Add To Cart</button>
        </li>
      </ul>
    </section>
  );
}
