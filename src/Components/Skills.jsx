

import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assests/img/meter1.svg";
import meter2 from "../assests/img/meter2.svg";
import meter3 from "../assests/img/meter3.svg";
import colorSharp from "../assests/img/color-sharp.png"



export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit at omnis explicabo minima atque rerum <br /> reprehenderit non reiciendis laborum tenetur iste ut sint, odio, cupiditate ex? Dolores amet maxime laudantium!
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt="Image1" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="Image2" />
                                    <h5>Java</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="Image3" />
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="Image4" />
                                    <h5>CSS</h5>
                                </div>
          
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image5" />
        </section>
      )
      
}