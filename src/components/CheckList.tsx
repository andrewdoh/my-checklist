import * as React from 'react'

export interface cProps {
    name? : string
}

interface cState {
    name : string
    
}

interface Props {

}

interface State {
    checkBoxes: React.ReactElement<any> []
}

class CheckBox extends React.Component<cProps, cState> {
    
    constructor(props: cProps) {
	super(props)
	this.state = {
	    name : this.props.name || ''
	}
    }
    
    render(){
	const { name } = this.state
	return(
	    <div>
		<input type="checkbox" />
		{name && <label> {name} </label>}
		<input type="text" />
	    </div>
	)
    }
}

export default class CheckList extends React.Component<Props, State> {
    
    constructor(props: Props) {
	super(props)
	this.state = {
	    checkBoxes: []
	}
    }
    
    addCheckBox = () => {
	var { checkBoxes } = this.state
	checkBoxes.push(<CheckBox/>)
	this.setState({
	    checkBoxes
	})
    }
    
    render() {
	const { checkBoxes } = this.state
	return(
	    <div>
		<button type="button" onClick={this.addCheckBox}> + </button>
		{checkBoxes.map((cd,idx) => <div key={idx}>{cd}</div>)}
	    </div>
	)
    }
}


