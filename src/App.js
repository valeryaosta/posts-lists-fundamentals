import React, {useMemo, useState} from "react";
import "./styles/App.css";
import PostList from "./components/UI/PostList";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";


function App() {

    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({sort: "", query: ""});

    const [modal, setModal] = useState(false);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)} style={{marginTop: 30}}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter}
                        setFilter={setFilter}
            />
            <PostList posts={sortedAndSearchedPosts} title={"Список постов JS"} remove={removePost}/>

        </div>
    );
}

export default App;



