import React, { Component } from 'react'
import './../Components/Login.css';
import {Link, Redirect} from 'react-router-dom';
import {auth} from './../firebase';

export default class Login extends Component {
    
    state = {
        email: "",
        password: "",
        redirect: false
    }

    handleEmail = (e) => {
        var value = e.target.value
        this.setState({
            email: value
        })
    }

    handlePassword = (e) => {
        var value = e.target.value
        this.setState({
            password: value
        })
    }

    handleSignIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((auth) => {
            console.log("login",auth);
            this.setState({
                redirect: true
            })
        })
        .catch(e => alert(e.message));
    }

    handleRegister = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((auth) => {
            console.log("register",auth)
            this.setState({
                redirect: true
            })
        })
        .catch(e => alert(e.message));
    }


    render() {
        if(this.state.redirect){
            return <Redirect to='/' />
        }
        return (
            <div className="login">
                <Link to="/">
                    <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
                </Link>

                <div className="login__container">
                    <h1>Sign In</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input onChange={(e) => {this.handleEmail(e)}} type="email" value={this.state.email} />
                        <h5>Password</h5>
                        <input onChange={(e) => {this.handlePassword(e)}} type="password" value={this.state.password} />
                        <button onClick={this.handleSignIn} type="submit" className="login__signInButton">Sign In</button>
                    </form>
                    <p>
                        By Sign-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our internet-Based Ads Notice.
                    </p>
                    <button onClick={this.handleRegister} className="login__registerButton">Create your Amazon Account</button>

                </div>
            </div>
        )
    }
}
