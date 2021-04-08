import React from 'react'
import './Home.css'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Linkedin, Github, Instagram } from 'react-bootstrap-icons'
import Jumbotron from '../bg.png'

const Face = () => {
    // console.log(window)
    return (
        <div className="Face">
            <div className="icons">
                <div style={{paddingBottom: 10}}>
                    <a href="https://www.linkedin.com/in/akashchekka/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="color icon"/>
                    </a>
                </div>
                <div style={{paddingBottom: 10}}>
                    <a href="https://github.com/Akash76" target="_blank" rel="noopener noreferrer">
                        <Github className="color icon"/>
                    </a>             
                </div>
                <div>
                    <a href="https://www.instagram.com/133_akash/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="color icon"/>               
                    </a>
                </div>
            </div>
            <div style={{alignSelf: 'center'}}>
                <h3 className="color">Hi, This is Akash!</h3>
                <p className="color big">I'm a Developer</p>
                <Button>Know me</Button>
                <Button variant="success" style={{marginLeft: 20}}>Hire me</Button>
            </div>
            <Image className="image" src={Jumbotron}/>
        </div>
    )
}

const About = () => {
    return (
        <div className="About">
            <Card style={{ width: '18rem', height: '20rem' }} className="card">
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
        </div>
    )
}

function Home() {
    return (
        <div className="Home">
            <Face />
            <About />
        </div>
    )
}

export default Home
