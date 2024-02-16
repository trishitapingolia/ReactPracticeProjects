import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TopNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src="logo.png" alt='logo' style={{width:"90px"}}/>
      </Container>
    </Navbar>
  );
}

export default TopNav;