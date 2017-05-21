import { Component, PropTypes } from "react";

export default class Assets extends Component {
    render() {
      return (<div className="container"> 
        <div className="heading">Asset Management</div>
        <div className="content">{this.props.childern}</div>
      </div>);
    }
}