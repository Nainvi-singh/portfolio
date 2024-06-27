import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import enveopen from "../assests/img/enevelop.svg";

export const Contacts = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c6ab5114-7234-4b04-ac4f-d75a8899994c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return(
    <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col size={12} md={6}>
        <div className="sorry">
          <img src={enveopen} alt="Icon" />
          <br />
          <p>Let's Connect</p>
        </div>
        </Col>
        <Col size={12} md={6}>
        
              <h2>Get In Touch</h2>
              <form onSubmit={onSubmit} >
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text"  placeholder="First Name" name="First Name" required/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Last Name" name="Last Name" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email"  placeholder="Email Address"  name="Email Address" required/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel"  placeholder="Phone No." name="Phone No." required />
                  </Col>
                  <Col size={12} className="px-1">
                  <textarea rows="6"  placeholder="Message" name="message" required></textarea>
                      <button type="submit"><span>Submit</span></button>
                    </Col> 
                     
                  </Row>
                </form>
                <span>{result}</span>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}
  

