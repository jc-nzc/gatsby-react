import React from "react";
import Header from "../components/header"

export default function About() {
	return(
		<div style={{ color: `red` }}>
			<Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
			<Header headerText="It's pretty cool" />
			<p>Such wow, very Reactive.</p>
		</div>
	)
}
