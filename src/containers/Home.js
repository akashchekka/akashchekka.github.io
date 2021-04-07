import React from 'react'
import './Home.css'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Linkedin, Github, Instagram } from 'react-bootstrap-icons'
import Jumbotron from '../bg.png'

const Face = () => {
    return (
        <div className="Face">
            <div style={{ flexDirection: 'column', alignSelf: 'center', justifyContent: 'space-evenly'}}>
                <div>
                    <a href="https://www.linkedin.com/in/akashchekka/" target="_blank" rel="noopener noreferrer">
                        <Linkedin style={{cursor: 'pointer'}} className="color"/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Akash76" target="_blank" rel="noopener noreferrer">
                        <Github style={{cursor: 'pointer'}} className="color"/>
                    </a>             
                </div>
                <div>
                    <a href="https://www.instagram.com/133_akash/" target="_blank" rel="noopener noreferrer">
                        <Instagram style={{cursor: 'pointer'}} className="color"/>               
                    </a>
                </div>
            </div>
            <div style={{alignSelf: 'center'}}>
                <h3 className="color">Hi, This is Akash</h3>
                <p className="color big">I'm a Developer</p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Button variant="success">Hire me</Button>
                    <Button style={{marginLeft: 20}}>Know me</Button>
                </div>
            </div>
            <div className="image">
                <Image src={Jumbotron}/>
            </div>
        </div>
    )
}

function Home() {
    return (
        <div className="Home">
            <Face />
        </div>
    )
}

export default Home
