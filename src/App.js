import React, {useMemo, useState} from "react";
import "./styles/App.css";
import PostList from "./components/UI/PostList";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "React", body: "UI-library"},
        {id: 2, title: "JavaScript", body: "Native language of JS"},
        {id: 3, title: "Redux", body: "State management"}
    ]);

    const [filter, setFilter] = useState({sort: "", query: ""});

    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

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



