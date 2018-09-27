import React, {Component} from "react";
class Feedback extends Component{
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.msg && this.props.msg.length <= 0) return null
        return(
            <span class="help-block"><span>{this.props.msg}</span></span>
        )
    }
}

export default Feedback