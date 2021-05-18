import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/css/contact.css';

class Contact extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <div class="contact">
                    <div className="contact-header">Get in touch.</div>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter your email:</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" rows={7} />
                        </Form.Group>
                    </Form>
                    <Button variant="primary">Send</Button>
                </div>
                <Footer />
            </React.Fragment>

        );
    }
}

export default Contact;