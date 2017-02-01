const React = require('react')

class CoordiantesButton extends React.Component{
	constructor(props){
		super()
	}

	render(){
		return(
			<button onClick={(event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}}/>
			)

	}

}

module.exports = CoordiantesButton





