import React, {useState} from "react";
import "./styles/App.css";
import PostList from "./components/UI/PostList";
import PostForm from "./components/UI/PostForm";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'}
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !== 0
                ? <PostList posts={posts} title={'Список постов JS'} remove={removePost}/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }
        </div>
    );
}

export default App;



