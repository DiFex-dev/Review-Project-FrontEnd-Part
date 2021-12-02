import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Button, Container, Form, FormControl, Nav, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

function Main() {

    const { t, i18n } = useTranslation();

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }

    const [reviewName, setReviewName] = useState("");
    const [review, setReview] = useState("");
    const [comment, setComment] = useState("");
    const [reviewList, setReviewList] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [reviewComments, setRewiewComments] = useState("")
    const [value, setValue] = useState("")

    const filtredReview = reviewList.filter(reviews =>{
        return reviews.name.toLowerCase().includes(value.toLowerCase())
    })

    useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
    setReviewList(response.data);
    });
    }, []);

    const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
    name: reviewName,
    review:review,
    });
        setReviewList([
            ...reviewList, 
            {name: reviewName, review: review},
        ]);
    };

    const Comments = (reviewName, category) => {
        console.log("Review comments" + reviewComments)
        Axios.put("http://localhost:3001/api/comment",{
            comm: category,
            name: reviewName,
        });
        
    }

    const deleteReview = (category) =>{
        Axios.delete(`http://localhost:3001/api/delete/${category}`) 
    };

    const updateReview = (reviewName, category) =>{
        Axios.put("http://localhost:3001/api/update",{
            name: reviewName,
            review: category,
        });
        setNewReview("")
    };

    return (
    <div className="App">
        <Container>
            <Button variant="light" onClick = {() =>{
                window.localStorage.setItem('theme', 'light')
                window.location.reload()
            }}>Light</Button>
            <Button variant="dark" onClick = {() =>{
                window.localStorage.setItem('theme', 'dark')
                window.location.reload()
            }}>Dark</Button>
        <Nav
        className="me-auto my-2 my-lg-1"
        style={{ maxHeight: '100px' }}
        navbarScroll>
            <Dropdown className="lang">
        <Dropdown.Toggle  variant="primary" id="dropdown-basic">
            Language
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={()=>handleClick('en')}>English</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={()=>handleClick('ru')} >Russian</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
            

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(event) => setValue(event.target.value)}
        />

      </Form>
      </Nav>
      </Container>
        <h1 className="Start-name">Add Review!</h1>
    <div className="form">
        <label><p>{t('Review title:.1')}</p></label>
            <input placeholder="Write the title" type="text" name="ReviewName" onChange={(e) =>
                setReviewName(e.target.value)
        } />
        <label>Review:</label>
            <input placeholder="Write a review" type="text" name="Review" onChange={(e) =>
                setReview(e.target.value)
        } />
     <Button variant="success" onClick={submitReview}><p>{t('Submit.1')}</p></Button>
    

    {filtredReview.map((val) =>{
    return(<div className="card">
        <h1>{val.name}</h1>
        <p className="review-text">{val.review}</p>
        <div className="edit-menu">
        <Button className="Delete" variant="outline-danger" onClick={()=>{deleteReview(val.name)}}><p>{t('Delete.1')}</p></Button>
        <Form.Control size="sm" type="text" id="inputUpdate" onChange={(e) =>{
            setNewReview(e.target.value)
        }} />
        <Button className="Update" variant="outline-secondary" onClick={() => {updateReview(val.name, newReview)}}><p>{t('Update.1')}</p></Button>
        </div>
        <Dropdown>
            <Dropdown.Toggle  variant="secondary" id="dropdown-basic">
            <p>{t('Comments.1')}</p>
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <input type="text" name="ReviewComment" onChange={(e) =>
                setComment(e.target.value) } />
                 <Button variant="success" onClick={Comments()}>Submit</Button>
                     <p>{val.comment}</p> 
        </Dropdown.Menu>
        </Dropdown>
        </div>);
    })}
    </div>
    </div>
    );
    }

    export default Main;
