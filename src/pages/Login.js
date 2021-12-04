import React, {useState, useEffect, useRef, setLoginStatus} from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, Modal, Overlay, Tooltip, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Axios from 'axios';
import { useTranslation } from 'react-i18next';


function Login() {

  const { t, i18n } = useTranslation();

  function handleClick(lang){
      i18n.changeLanguage(lang);
  }
  const [value, setValue] = useState("")

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [LoginStatus, setLoginStatus] = useState('');

  const [isAuth, setIsAuth] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showL, setShowL] = useState(false);

  const handleCloseL = () => setShowL(false);
  const handleShowL = () => setShowL(true);

  const [showR, setShowR] = useState(false);

  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);

  const [showP, setShowP] = useState(false);
  const target = useRef(null);


  const [reviewList, setReviewList] = useState([]);

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {

      if (response.data.message) {
          setLoginStatus(response.data.message);
      } else {
        
      }

    });
  };

  const filtredReview = reviewList.filter(reviews =>{
    return reviews.name.toLowerCase().includes(value.toLowerCase())
})


  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
    setReviewList(response.data);
    });
    }, []);

  
  return (
    <Container>
      <div className="Themes">
      <Button variant="light" onClick = {() =>{
                window.localStorage.setItem('theme', 'light')
                window.location.reload()
            }}>{t('Light.1')}</Button>
            <Button variant="dark" onClick = {() =>{
                window.localStorage.setItem('theme', 'dark')
                window.location.reload()
            }}>{t('Dark.1')}</Button>
            </div>
   <Navbar expand="lg" className="navbar">
  <Container fluid>
    <>
      <Button variant="outline-success" onClick={handleShowL}>
       {t('Login.1')}
      </Button>
      <Button variant="outline-success" onClick={handleShowR}>
      {t('Register.1')}
      </Button>
      
      <Modal show={showR} onHide={handleCloseR}>
        <Modal.Header closeButton>
          <Modal.Title>{t('Register page.1')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{t('Username.1')}</Form.Label>
    <Form.Control type="text" placeholder="Enter username" onChange={(e) => {
      setUsernameReg(e.target.value)
     }} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>{t('Password.1')}</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) =>
               setPasswordReg(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit" ref={target} onClick={() => {register();setShowP(!showP);}}>
  {t('Register.1')}
  </Button>
  <Overlay target={target.current} show={showP} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {t('Succesful Registration.1')}
          </Tooltip>
        )}
      </Overlay></Modal.Body>
    
      </Modal>
      
      <Modal show={showL} onHide={handleCloseL}>
        <Modal.Header closeButton>
          <Modal.Title>{t('Login page.1')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{t('Username.1')}</Form.Label>
    <Form.Control type="email" placeholder="Enter username" onChange={(e) => {
      setUsername(e.target.value)
     }} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>{t('Password.1')}</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) =>
               setPassword(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={login}>
  {t('Login.1')}
  </Button></Modal.Body>
    
      </Modal>
    </>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <Dropdown className="lang">
        <Dropdown.Toggle  variant="primary" id="dropdown-basic">
            {t('Language.1')}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={()=>handleClick('en')}>{t('English.1')}</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={()=>handleClick('ru')}>{t('Russian.1')}</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="Search"
          aria-label="Search"
          onChange={(event) => setValue(event.target.value)}
        />
        
      </Form>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className="App">
  <div className="form">
 {reviewList.map((val) =>{
  return(<div className="card">
      <h1>{val.name}</h1>
      <p>{val.review}</p>
      </div>);
    })}
    </div>
    </div>
  </Container>
);
};

export default Login
