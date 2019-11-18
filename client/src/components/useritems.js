import React, { Component } from "react";
import Cookie from "js-cookie";
import Axios from "axios";
import Edit from "./edit";
import {Link} from "react-router-dom"

//takes the itemlist of User and show it on screen
export class useritems extends Component {
  state = { mylist: [], productlist: [] ,show:""};
  componentDidMount = async () => {
    const token = await Cookie.get("token");
    const res = await Axios.get(`/useritems/${token}`);
    const itemlist = res.data;
    itemlist.map(item => {
      const name = Object.keys(item);
      const itemarr = Object.values(item);
      console.log(itemarr);
      const arr = this.state.productlist;
      const olditemarr = this.state.mylist;
      this.setState({
        productlist: [name, ...arr],
        mylist: [itemlist, ...olditemarr]
      });
    });
    console.log(this.state);
  };
  edit = () => {
    return (
    this.setState({show:<Edit/>})
    );
  };
  showlist = () => {
    return this.state.productlist.map(name => {
      return (
        <React.Fragment>
          <li>{name}</li>
          <Link to="/edit">EDIT  </Link>

          <Link to="/delete"> DELETE</Link>
          {/* <button onClick={this.edit}>Edit</button>
         
          <button onClick={this.edit}>Delete</button> */}
          {this.state.show}
        </React.Fragment>
      );
    });
  };
  render() {
    return <div>{this.showlist()}</div>;
  }
}

export default useritems;
