import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import NavBar from './components/navbar'
import DashBoard from './components/dashboard'
import Error from './components/error'
import First from './components/first'
import {BrowserRouter as Router,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Cookie from "js-cookie"
import ProtectedRoute from '../src/components/protectedroute';

class App extends Component{
    state={auth:false}
    componentDidMount=async ()=> {
        var token=Cookie.get("token");
        if(token!=="null"){
            this.setState({auth:true})
        }
        console.log(this.state)

    } 

    render(){
        return (
            <Router>
            <div>
            <NavBar />
            <Route path="/" exact strict component= {First} />
            <ProtectedRoute path="/dashboard" exact component={DashBoard}/>
            {/* <Route path="/dashboard" exact strict render={
                ()=>this.state.auth ? (<DashBoard />) : (<Redirect to='/'/>)}/> */}
            {/* <Route path="*" exact component={Error}></Route>
              */}
            </div>
            </Router>
        )
    }
}
ReactDOM.render(<App />,document.querySelector('#root'))