// дз
//
// урл
// https://jsonplaceholder.typicode.com/
//
//     ендпоінти
//   /posts
//   /comments
//   /albums
//   /photos
//   /todos
//   /users
//
// потрібно створити логіку, яка задовільнить наступні вимоги
// в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами' (posts, comments, albums, photos, todos, users)
// дефолтно обрана таба- пости
// по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через .map
// лише 1 список видимий одночасно
// потрібно створити 6 компонент, які займатимуться рендерінгом списків (отримуватимуть пропсами список)- PostList, CommentsList...

import './App.css';
import {useEffect, useState} from "react";
import AlbumsList from "./components/albumslist/AlbumsList";
import CommentsList from "./components/commentslist/CommentsList";
import PostsList from "./components/postslist/PostsList";
import PhotosList from "./components/photoslist/PhotosList";
import TodosList from "./components/todoslist/TodosList";
import UsersList from "./components/userslist/UsersList";

const url = 'https://jsonplaceholder.typicode.com/';

const App = () => {
    const [list, setList] = useState('posts');
    const [data, setData] = useState([]);
    const [isLoadin, setIsLoading] = useState(false);


    const selectList = (list) => {
        setList(list);
        // console.log('list', list);
    }

    const fetchList = async () => {
        setIsLoading(true);
        const response = await fetch(`${url}${list}`);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
        // console.log(data);
    }

    useEffect(() => {
        fetchList();

        return () => {
            setData([])
        }
    }, [list])

    return (
        <div className={'App'}>

            <button onClick={() => selectList('posts')}>{'posts'}</button>
            <button onClick={() => selectList('comments')}>{'comments'}</button>
            <button onClick={() => selectList('albums')}>{'albums'}</button>
            <button onClick={() => selectList('photos')}>{'photos'}</button>
            <button onClick={() => selectList('todos')}>{'todos'}</button>
            <button onClick={() => selectList('users')}>{'users'}</button>
            <hr/>

            <div>

                {!data.length && isLoadin && (<h1>LOADING DATA...</h1>)}

                {!!data && (
                    <>
                        <hr/>
                        {list === 'posts' && (data.map(item => (<PostsList key={item.id} userId={item.userId} title={item.title} body={item.body}/>)))}
                        {list === 'comments' && (data.map(item => (<CommentsList key={item.id} postId={item.postId} name={item.name} email={item.email} body={item.body}/>)))}
                        {list === 'albums' && (data.map(item => (<AlbumsList key={item.id} userId={item.userId} title={item.title}/>)))}
                        {list === 'photos' && (data.map(item => (<PhotosList key={item.id} albumId={item.albumId} title={item.title} url={item.url} thumbnailUrl={item.thumbnailUrl}/>)))}
                        {list === 'todos' && (data.map(item => (<TodosList key={item.id} userId={item.userId} title={item.title} completed={item.completed}/>)))}
                        {list === 'users' && (data.map(item => (<UsersList key={item.id} user={item}/>)))}
                        <hr/>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;