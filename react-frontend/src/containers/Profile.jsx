import React, {Component} from 'react';

export default class Profile extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.page)
        return(
            <div>
                this is the {this.props.page} page
            </div>
        )
    }
}