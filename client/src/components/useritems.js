import React, { Component } from 'react'
import Cookie from 'js-cookie';
import Axios from 'axios';

export class useritems extends Component {
    state={mylist:[], productlist:[]}
    componentDidMount=async ()=>{
        const token=await Cookie.get('token');
        const res=await Axios.get(`/useritems/${token}`);
        const itemlist=res.data;
        itemlist.map((item)=>{
            const name=Object.keys(item);
            const itemarr=Object.values(item);
            console.log(itemarr);
            const arr=this.state.productlist;
            const olditemarr=this.state.mylist;
            this.setState({productlist:[name, ...arr], mylist:[itemlist, ...olditemarr]});
        })
        console.log(this.state)
    }

    showlist=()=>{
        return this.state.productlist.map((name)=>{
          return <li>{name}</li>  
        })
    }
    render() {
        return (
            <div>
                {this.showlist()}
            </div>
        )
    }
}

export default useritems
