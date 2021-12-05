import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Button, Container, Form, FormControl, Nav, Dropdown, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import { FaStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

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

    // const handleSubmit = (reviewName) => {
    //     console.log("Review comments " + comment)
    //     console.log("Review Id " + reviewName)
    //     Axios.put("http://localhost:3001/api/comment",{
    //         comment: comment,
    //         reviewName: reviewName,
    //     });
    // }

    const { t, i18n } = useTranslation();

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }

    const [rating, setRating] = useState(null);
    const [like, setLikeRating] = useState(null)
    const [hover, setHover] = useState(null);
    const [likehover, setLikeHover] = useState(null);

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

    const Comments = (reviewName) => {
        console.log("Review comments" + reviewName + " " + comment)
        Axios.put("http://localhost:3001/api/comment",{
            comment: comment,
            reviewName: reviewName,
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
                <Carousel className="image">
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
                <input type="text" name="ReviewComment" onChange={(e) => setComment(e.target.value) } /> 
                <Button variant="primary" onClick={() => {Comments(val.name)}}>{t('Submit.1')}</Button>
                <p>{val.comment}</p> 
            </Dropdown.Menu>
        </Dropdown>
        <div className="grade">
        <div className="rating">
        {[...Array(5)].map((star, i) =>{
            const ratingValue = i + 1;
            return <label> 
                <input 
                type="radio"
                name="rating" 
                value={ratingValue}
                onClick={()=>setRating(ratingValue)} />
                <FaStar 
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}/> 
                </label>
        })}
        </div>
        <div className="like_input">
        {[...Array(1)].map((star, i) =>{
            const likeValue = i + 1;
                return <label><input
                type="radio"
                name="like_input" 
                value={likeValue}
                onClick={()=>setLikeRating(likeValue)} />
                <BiLike
                className="like"
                color={likeValue <= (likehover || like) ? "#ff0000" : ""}
                onMouseEnter={() => setLikeHover(likeValue)}
                onMouseLeave={() => setLikeHover(null)}
                size={100}
                />
                </label>
        })}
            <p className="like_value">{like}</p>
            </div>
            </div>
        </div>);
    })}
    </div>
    </div>
    );
    }

    export default Main;
