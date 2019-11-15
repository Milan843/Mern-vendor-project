import React, { Component } from 'react'

export class productName extends Component {
    render() {
        return (
            <div>
                 <input onChange={e=>{this.props.productname(e.target.value)}} type="text" placeholder="Product"/>
            </div>
        )
    }
}

export default productName
