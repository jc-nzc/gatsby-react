import React from "react";
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
	return(
		<div style={{ color: `gray`, fontSize: `24px`, textAlign: `center` }}>
			<Link to="/">Home</Link>
			<Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
			<Header headerText="It's pretty cool" />
			<p>Such wow, very Reactive.</p>
		</div>
	)
}
