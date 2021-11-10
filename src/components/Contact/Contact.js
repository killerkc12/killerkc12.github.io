import React, { useState } from 'react'
import { Container, Row, Col, Form , Button} from 'react-bootstrap'
import Particle from '../Particle'
import SimpleMap from './SimpleMap'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

function Contact() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleSubmit= (e) => {
        e.preventDefault()
        const info = {
            name , email, message
        }
        if(info.name === undefined || info.email === undefined || info.message === undefined || info.name === "" || info.email === "" || info.message === ""){
            toast.error("All Fields are Mandatory!")
            return 
        }else{
            axios.post('https://killerkc12-backend.herokuapp.com/portfolio/sendmail',{
                info
            })
            .then(data=>{
                console.log(data)
                toast.success("Mail Sent Successfully!")
                toast.success("We'll get back to you")
            })
            .catch(err=>{
                console.log(err)
                toast.error("Failed to send Mail!")
            })
        }
        
        console.log(info)
        
    }

    

    return (
        <div>
            <Container fluid className="contact-section" >
            <Particle/>
                <Container>
                <h1 className="project-heading">
                    <strong className="purple">Contact </strong> Me
                </h1>
                    <Row style={{marginBottom:"10px"}} >
                        <Col md={6}>
                            <div className="form__container">
                                <Form onSubmit={e => {handleSubmit(e)}}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control size="md" type="text" onChange={e=>setName(e.target.value)} placeholder="Enter you Name" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control size="md" type="email" onChange={e=>setEmail(e.target.value)} placeholder="Enter you Email" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message </Form.Label>
                                        <Form.Control size="md" as="textarea" rows={4} onChange={e=>setMessage(e.target.value)} placeholder="Enter you Message"  />
                                    </Form.Group>
                                    <input type="submit" className="send__button" value="Send"/>
                                    <ToastContainer/>
                                </Form>
                            </div>
                        </Col>
                        <Col 
                        md={6} style={{padding:"0 50px", marginBottom:"50px"}}
                        >
                            <div style={{height:"70vh"}}><SimpleMap /></div>
                            
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Contact
