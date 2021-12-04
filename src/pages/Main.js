import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Button, Container, Form, FormControl, Nav, Dropdown, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

function Main() {

    const [img, setImg] = React.useState(null)
    const [review_image, setReview_image] = React.useState(null)

    const sendFile = React.useCallback(async () =>{
        try {
            const data = new FormData()
            data.append("review-images", img)

            await Axios.post("/api/upload", data, {
                headers: {
                    "content-type": "mulpipart/form-data"
                }
            })

            .then(res => setReview_image(res.data.path))
        } catch (error) {

        }
    }, [img])

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
            }}>{t('Light.1')}</Button>
            <Button variant="dark" onClick = {() =>{
                window.localStorage.setItem('theme', 'dark')
                window.location.reload()
            }}>{t('Dark.1')}</Button>
        <Nav
        className="me-auto my-2 my-lg-1"
        style={{ maxHeight: '100px' }}
        navbarScroll>
            <Dropdown className="lang">
        <Dropdown.Toggle  variant="primary" id="dropdown-basic">
            {t('Language.1')}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={()=>handleClick('en')}>{t('English.1')}</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={()=>handleClick('ru')} >{t('Russian.1')}</Dropdown.Item>
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
        <h1 className="Start-name">{t('Add Review!.1')}</h1>
    <div className="form">
        <label>{t('Title.1')}</label>
            <input placeholder="Write the title" type="text" name="ReviewName" onChange={(e) =>
                setReviewName(e.target.value)
        } />
        <label>{t('Review.1')}</label>
            <input placeholder="Write a review" type="text" name="Review" onChange={(e) =>
                setReview(e.target.value)
        } />
        <input type="file" onChange={e => setImg(e.target.files[0])} />
        
     <Button variant="success" onClick={() => {submitReview(); sendFile();}}>{t('Submit.1')}</Button>
    

    {filtredReview.map((val) =>{
    return(<div className="card">
        <h1>{val.name}</h1>
        <p className="review-text">{val.review}</p>
                <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={`${review_image}`}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={`${review_image}`}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={`${review_image}`}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
        <div className="edit-menu">
        <Button className="Delete" variant="outline-danger" onClick={()=>{deleteReview(val.name)}}>{t('Delete.1')}</Button>
        <Form.Control size="sm" type="text" id="inputUpdate" onChange={(e) =>{
            setNewReview(e.target.value)
        }} />
        <Button className="Update" variant="outline-secondary" onClick={() => {updateReview(val.name, newReview)}}>{t('Update.1')}</Button>
        </div>
        <Dropdown>
            <Dropdown.Toggle  variant="secondary" id="dropdown-basic">
            <p>{t('Comments.1')}</p>
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <input type="text" name="ReviewComment" onChange={(e) =>
                setComment(e.target.value) } />
                 <Button variant="success" onClick={Comments()}>{t('Submit.1')}</Button>
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
