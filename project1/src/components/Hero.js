import { Button } from "react-bootstrap";
function Hero() {
    return ( 
        <main className="hero container d-flex justify-content-end pt-4">
            <div className="container d-flex flex-column gap-2">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="d-flex gap-4">
                    <Button variant="danger">Shop Now</Button>{' '}
                    <Button variant="outline-dark">Category</Button>
                </div>
                <br></br>
                <h6>Also Available On</h6>
                <div className="d-flex gap-2">
                    <img src="amazon.png" alt="amazon-icon" />
                    <img src="flipkart.png" alt="flipkart-icon" />
                </div>
            </div>
            <div>
                <img src="shoe_image.png" alt="shoe-image"/>
            </div>
        </main>
     );
}

export default Hero;