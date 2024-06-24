import { useState,useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import pfp from '../assests/img/pfp.jpeg';
import linkedin from "../assests/img/nav-icon1.svg";
import github from "../assests/img/github.svg";
import leetcode from "../assests/img/leetcode.svg";



export const NavBar=()=>{
    const [activeLink,setActiveLink]=useState('home');
    const[srcolled,setSrcolled]=useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setSrcolled(true);
            }
            else{
                setSrcolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return()=> window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
    return(
        <Navbar expand="lg" className={ srcolled?"scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={pfp} alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' :'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' :'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' :'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>  
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://leetcode.com/u/Nainvi_/"><img src={leetcode} alt="Icon" /></a>
                        <a href="https://github.com/Nainvi-singh"><img src={github} alt="Icon" /></a>
                        <a href="https://www.linkedin.com/in/nainvi-singh/"><img src={linkedin} alt="Icon" /></a>
                    </div>
                    <button className="vvd" onClick={()=>console.log('connect')}>
                        <span>Let's Connect</span>
                    </button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}