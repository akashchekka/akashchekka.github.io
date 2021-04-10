import React, { useState } from 'react'
import './Home.css'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import LoaderButton from '../components/LoaderButton'
import { Linkedin, Github, Instagram } from 'react-bootstrap-icons'
import { useFormFields } from '../lib/hooksLib'
import Jumbotron from '../bg.png'
import { useRefContext } from '../lib/context'

const Icons = () => {
    return (
        <div className="icons">
            <div style={{paddingBottom: 10}}>
                <a href="https://www.linkedin.com/in/akashchekka/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="color icon mob"/>
                </a>
            </div>
            <div style={{paddingBottom: 10}}>
                <a href="https://github.com/Akash76" target="_blank" rel="noopener noreferrer">
                    <Github className="color icon mob"/>
                </a>             
            </div>
            <div>
                <a href="https://www.instagram.com/133_akash/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="color icon mob"/>               
                </a>
            </div>
        </div>
    )
}

const Face = () => {
    // console.log(window)
    return (
        <div className="Face">
            <Icons />
            <div style={{alignSelf: 'center'}} className="mob1">
                <h3 className="color">Hi, This is Akash!</h3>
                <p className="color big">I'm a Full Stack Developer</p>
                <Button>Know me</Button>
                <Button variant="success" style={{marginLeft: 20}}>Hire me</Button>
            </div>
            <Image className="image" src={Jumbotron}/>
        </div>
    )
}

const Tech = () => {

    const { techRef } = useRefContext()
    return (
        <div className="Tech" ref={techRef}>
            <h3 className="tech-head" style={{fontSize: 50, paddingBottom: 50}}>Tech Stack</h3>  
            <div className="cards">
                <Card style={{ width: '18rem', height: '20rem' }} className="card suffice">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height: '20rem' }} className="card">
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height: '20rem' }} className="card">
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [fields, handleFieldChange] = useFormFields({
        name: "",
        email: "",
        message: ""
    })
    const handleSubmit = () => {
        console.log("OK")
    }
    return (
        <div className="Contact">

            <Card className="card formcard">
            <h3 className="tech-head" style={{fontSize: 50, paddingBottom: 50}}>Contact</h3>  
                <Form onSubmit={handleSubmit}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}} className="mob3">
                        <Form.Group size="lg" controlId="name">
                            <Form.Control
                            autoFocus
                            type="text"
                            value={fields.name}
                            placeholder="Name"
                            style={{ backgroundColor: 'inherit' }}
                            className="textarea"
                            onChange={handleFieldChange}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="email">
                            <Form.Control
                            type="text"
                            value={fields.email}
                            placeholder="Email"
                            style={{ backgroundColor: 'inherit' }}
                            className="textarea"
                            onChange={handleFieldChange}
                            />
                        </Form.Group>
                    </div>
                    <Form.Group controlId="message">
                        <Form.Control
                        type="text"
                        value={fields.message}
                        placeholder="Message"
                        style={{height: 100, backgroundColor: 'inherit'}}
                        className="textarea"
                        onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <LoaderButton
                        block
                        size="lg"
                        type="submit"
                        isLoading={isLoading}
                        disabled={false}
                    >
                        Submit
                    </LoaderButton>
                </Form>
            </Card>
        </div>
    )
}

function Home() {
    return (
        <div className="Home">
            <Face />
            <Tech />
            <Contact />
        </div>
    )
}

export default Home
