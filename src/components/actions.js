import React from 'react'
import {Button} from 'carbon-components-react'

class Actions extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedCount: 0
        }
        this.selectAll=this.selectAll.bind(this)
        this.deselectAll=this.deselectAll.bind(this)
    }

    selectAll(){
        this.props.gridApi.selectAll()
        this.setState({
            selectedCount:this.props.gridApi.getSelectedRows().length
        })
    }

    deselectAll(){
        this.props.gridApi.deselectAll()
        this.setState({
            selectedCount:this.props.gridApi.getSelectedRows().length
        })
    }
    render(){
        return (
            <div style={{alignItems:"center", display:"flex", flexWrap : 'wrap'}}>
            <Button data-test='selectAll' style={{marginRight:"5px"}} 
            onClick={this.selectAll}>
                Select All</Button>
            <Button data-test='deselectAll'
            onClick={this.deselectAll}>
                Deselect All</Button>
            </div>
        )
    }

}

export default Actions