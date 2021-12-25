import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.scss';

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        //get login data for auth
        console.log("get auth data");
        console.log("email: ",email,"password: ",pass);        
        history.push("/home");
    }

    return (
        <div className='login-container'>
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm md={6} >
                        <h4 style={{marginBottom:"25px",textAlign:"center"}}>Sign in</h4>
                        <Form onSubmit={(e)=>handleSubmit(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" onChange={e=>setPass(e.target.value)}/>
                            </Form.Group>
                            <Button style={{width:"100%"}} variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Login;