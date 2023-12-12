import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Contact = () => {
    return (
        <div className="mb-12">
            <Container>
            <div className="hero w-full md:w-11/12 mx-auto rounded-lg p-8">
  <div className="hero-overlay bg-black"></div>
  <div className="hero-content text-center text-white flex justify-between items-center">
    <div className="max-w-md space-y-3">
        <div className='flex-1'>
      <h1 className="mb-5 text-2xl font-bold">We Carry More Than Just Good Skills</h1>
      <h2 className='text-3xl'>Let's work together!</h2>
        </div>
          <Link to='/contactEmail'>
         <button className="btn btn-success text-white">Contact us</button>
          </Link>
       

    </div>
  </div>
</div>
            </Container>
            
        </div>
    );
};

export default Contact;