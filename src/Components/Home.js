// import {Link} from "react-router-dom";

// function Home() {
//   return (
//     <div className="">
//      <nav>
//      <ul>
//          <li><Link to="/product">Product</Link> </li>
//          <li><Link to="/">Land</Link></li>
//      </ul>
//      </nav>
//     </div>
//   );
// }

// export default Home;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function ColorSchemesExample() {
  return (
    <>
          <h2 className="font-weight-bold">E-Commerce Website!!</h2>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Retail</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">All Product</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;