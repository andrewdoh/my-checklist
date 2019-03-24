import * as React from 'react'
import './CheckList.css'

export interface cProps {
    id: number
    name?: string
    removeCB: ((...args: any[]) => void)
}

interface cState {
    name: string
    
}

interface Props {

}

interface State {
    checkBoxes: React.ReactElement<any> []
    removed: number []
}

class CheckBox extends React.Component<cProps, cState> {
    
    constructor(props: cProps) {
	super(props)
	this.state = {
	    name: this.props.name || ''
	}
    }
    editName = () => {
	
    }
    
    render(){
	const { name } = this.state
	const { removeCB, id } = this.props
	return(
	    <div className="checkbox">
		<input className="check" type="checkbox" />
		{name && <label> {name} </label>}
		<input type="text" value={name}/>
		<button className="edit-button" id={`${id}`} type="button" onClick={removeCB}> edit </button>
		<button className="close-button" id={`${id}`} type="button" onClick={removeCB}> x </button>
	    </div>
	)
    }
}

export default class CheckList extends React.Component<Props, State> {
    
    constructor(props: Props) {
	super(props)
	this.state = {
	    checkBoxes: [],
	    removed: []
	}
    }
    
    addCheckBox = () => {
	const { checkBoxes, removed } = this.state
	var id:number
	var r
	if (removed.length){
	    id = removed[0]
	    r = removed.filter(rId=>rId != id)
	    
	} else {
	    id = checkBoxes.length
	}

	checkBoxes.push(<CheckBox id={id} removeCB={this.removeCheckBox}/>)
	this.setState({
	    checkBoxes,
	    removed:r ? r : removed
	})
    }
    
    removeCheckBox = (index:any) => {
	const { checkBoxes, removed } = this.state
	const rIndex = index.currentTarget.id
	const cbs = checkBoxes.filter(cb => cb.props.id != rIndex)
	const c = removed.concat([rIndex])
	this.setState({
	    checkBoxes: cbs,
	    removed: checkBoxes.length ? c : [] 
	})
    }
    
    render() {
	const { checkBoxes } = this.state
	return(
	    <div className="box">
		<header>
		    <h1> My Check List </h1>
		    <button className="add-button" type="button" onClick={this.addCheckBox}> + </button>
		</header>
		<div className="checklist">
		    {checkBoxes.map((cd,idx) => <div key={idx}>{cd}</div>)}
		</div>
	    </div>
	)
    }
}


