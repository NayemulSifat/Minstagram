import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import "./Post.css"


const Post = (props) => {

    const { title, body, id } = props.post;
    return (
        <div className="postContainer">
            <h3>Title : {title.toUpperCase()}</h3>
            <h4>Body : {body.toUpperCase()}</h4>
            <Link to={`/postdetails/${id}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" >Show Comments</Button></Link>

        </div>
    );
};

export default Post;