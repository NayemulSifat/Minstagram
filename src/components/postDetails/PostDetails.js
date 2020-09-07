import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import '././PostDetails.css'
import Comment from '../Comments/Comment';
import { useHistory, useParams } from 'react-router-dom';



const PostDetails = () => {
    const { id } = useParams();

    const [detail, setDetail] = useState({});

    const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    useEffect(() => {
        fetch(postUrl)
            .then(res => res.json())
            .then(data => setDetail(data));
    }, [])

    const [comments, setComments] = useState([]);

    const commentUrl = (`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    useEffect(() => {
        fetch(commentUrl)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, [])
    const history = useHistory();
    const handleClick = () => {
        history.push('/')
    }
    return (
        <div className="postDetailsContainer">

            <div>
                <h1> Title : {detail.title} </h1>
                <h4>{detail.body}</h4>
                <Button onClick={() => handleClick()} variant="contained">Go Home </Button>

                <h5>Comments ({comments.length}) :</h5>
            </div>
            {

                comments.map((comment) => (<Comment key={comment.id} comment={comment} />))

            }
        </div>
    );
};

export default PostDetails;