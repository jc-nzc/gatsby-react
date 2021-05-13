import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

// export default function Home() {
//   return <div>Hello world!</div>
// }

export default function Home() {
  return (
    <div style={{ color: `gray`, fontSize: `24px`, textAlign: `center` }}>
      <Link to="/contact/">Contact</Link>
      <br/>
      <Link to="/about/">About</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="Use Your Imagination" />
      <div></div>
      <button className="primary-button">Click me</button>
    </div>
  );
}
