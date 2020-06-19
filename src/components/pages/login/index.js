import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link,Redirect } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
import "./style.css";


export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: "",
            isLogin:false
        }
    }
    fnonChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    fnLogin = (event) => {
        event.preventDefault();
        this.setState({isLogin:true})
    }
    render() {
        if(this.state.isLogin){
            return <Redirect to ="/" />
        }
        else return (
            <section className="login_container">
                <div className="container-fluid">
                    <div className="row h-100">
                        <Col sm="5" className="login_bg">
                            <img src={Logo} className="brand_log" alt="Northout Logo" />
                            <div className="login_content">
                                <h3>RESOURCE PRO</h3>
                                <p>Risk Assessment Took Kit</p>
                            </div>
                        </Col>
                        <Col sm="7" className="login-container">
                            <div className="login-box">
                                <div>
                                    <h3>Login</h3>
                                </div>
                                <Form onSubmit={this.fnLogin}>
                                    <FormGroup row>
                                        <Label xs={4} sm={4} style={{ textAlign: "center" }}>Email Id</Label>
                                        <Col sm={8} xs={8}>
                                            <Input type="text"  name="email" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label xs={4} style={{ textAlign: "center" }} sm={4}>Password</Label>
                                        <Col sm={8} xs={8}>
                                            <Input type="password"  name="password" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup check row>
                                        <Col sm={{ size: 10, offset: 4 }}>
                                            <Button type="submit" className="login-button">Submit</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                                <div>
                                    <p>Forget password <Link to="#">Click here</Link></p>
                                </div>
                            </div>
                            <p className="reg-link">New User ?  <Link to="/register">Register here</Link> </p>
                        </Col>
                    </div>
                </div>
            </section>
        )
    }
}


export default Login