import React, { useState, useEffect } from 'react';
import Post from '../post/Post';
import Grid from '@material-ui/core/Grid';
import './Home.css';



const Home = () => {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPost(data);
            })
    }, [])
    const postStyle = {
        width: "50%",
        margin: "auto",
        textAlign: "center"
    }
    return (

        <div className="container">

            {
                posts.map(post => <Grid container style={postStyle} > <Grid items xs={12}> <Post post={post}></Post> </Grid ></Grid>)
            }


        </div>

    );

};

export default Home;