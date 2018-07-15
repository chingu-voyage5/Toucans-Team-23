import React, { Component } from 'react'
import { Container, Header, Button, Loader } from 'semantic-ui-react'

class Test extends Component {
	render() {
		return (
			<Container>
				<p>helllllloo world</p>
				<Loader active>Loading</Loader>
				<Button>Hello</Button>
			</Container>
		)
	}
}

export default Test
