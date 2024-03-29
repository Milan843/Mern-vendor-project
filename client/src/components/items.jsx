import React, { Component } from "react";
import Axios from "axios";
// import { Dropdown } from 'semantic-ui-react'

//shows the selected items
class Item extends Component {
  state = { itemlist: [] };

  async componentDidMount() {
    const res = await Axios.get(`/itemlist`, {
      headers: {},
      params: {}
    });
    this.setState({ itemlist: [...res.data] });
  }

  Itemlist = () => {
    return this.state.itemlist.map(({ name, _id }) => {
      return (
        <React.Fragment>
          <button
            style={{ margin: "5px", padding: "5px" }}
            key={_id}
            value={name}
            onClick={e => {
              this.props.selectedItems(e.target.value);
            }}
          >
            {name}
          </button>
          {/* <Dropdown placeholder='Skills'  options={this.state.itemlist} /> */}
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.Itemlist()} </div>
      </React.Fragment>
    );
  }
}

export default Item;
