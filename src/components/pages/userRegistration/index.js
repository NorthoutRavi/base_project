import React, { Component } from 'react';
import {Col, Form, FormGroup,Input, Button } from 'reactstrap';
import {Link} from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./style.css";


export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            email:'',
            mobile:'',
            address:"",
            agency_name:''
        }
    }
    fnonChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    fnRegister=(event)=>{
        event.preventDefault()
        // this.props.fnRegister(this.state);
        console.log(this.state)
        this.setState({
            first_name: '',
            last_name: '',
            password: "",
            email:'',
            mobile:'',
            address:"",
            agency_name:''
        })
        alert("User Regiser Successully !!")
    }

    render() {
        return (
        <section className="login_container">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <Col sm="5" className="reg_bg">
                        <img src={Logo} className="brand_log" alt="Logo" />
                        <div className="login_content">
                            <h3>RESOURCE PRO</h3>
                            <p>Risk Assessment Took Kit</p>
                        </div>
                    </Col>
                    <Col sm="7" className="reg-container">
                        <div >
                            <h3>Registration</h3>
                            <Form onSubmit={this.fnRegister}>
                                <FormGroup>
                                    {/* <Label for="first_name">First Name</Label> */}
                                    <Input type="text" 
                                    value={this.state.first_name} 
                                    name="first_name" 
                                    id="first_name" 
                                    placeholder="First Name"
                                     required 
                                     onChange={this.fnonChange} />
                                </FormGroup>
                                <FormGroup>
                                    {/* <Label for="last_name">Last Name</Label> */}
                                    <Input type="text" 
                                    value={this.state.last_name} 
                                    name="last_name" 
                                    id="last_name" 
                                    placeholder="Last Name"
                                     required 
                                     onChange={this.fnonChange} />
                                </FormGroup>
                                <FormGroup>
                                    {/* <Label for="email">Email</Label> */}
                                    <Input type="text" 
                                    value={this.state.email} 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email"
                                     required 
                                     onChange={this.fnonChange} />
                                </FormGroup>
                                <FormGroup>
                                    {/* <Label for="mobile">Mobile</Label> */}
                                    <Input type="text" 
                                    value={this.state.mobile} 
                                    name="mobile" 
                                    id="mobile" 
                                    placeholder="Mobile"
                                     required 
                                     onChange={this.fnonChange} />
                                </FormGroup>
                                <FormGroup>
                                    {/* <Label for="address">Password</Label> */}
                                    <Input type="textarea" 
                                    value={this.state.address} 
                                    name="address" 
                                    id="address" 
                                    placeholder="Address (street, city, state, zip) "
                                    required 
                                    onChange={this.fnonChange} />
                                </FormGroup>
                                <FormGroup>
                                    {/* <Label for="agency_name">Password</Label> */}
                                    <Input type="text" 
                                    value={this.state.agency_name} 
                                    name="agency_name" 
                                    id="adgency_name" 
                                    placeholder="Agency Name"
                                    required 
                                    onChange={this.fnonChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit" className="reg_btn" >Request Registration</Button>
                                </FormGroup>
                            </Form>
                        </div>
                        <p className="login-link">Already Registered ?  <Link to="/login">Login Here</Link> </p>
                    </Col>
                </div>
            </div>
        </section>
        )
    }
}


export default Login

