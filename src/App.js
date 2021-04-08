import './App.css';
import {useState} from "react";

const url = 'https://jsonplaceholder.typicode.com/';

const App = () => {
    const [list, setList] = useState('posts');


    const selectPosts = () => {
        setList('posts');
    }
    const selectComments = () => {
        setList('comments');
    }
    const selectAlbums = () => {
        setList('albums');
    }
    const selectPhotos = () => {
        setList('photos');
    }
    const selectTodos = () => {
        setList('todos');
    }
    const selectUsers = () => {
        setList('users');
    }

    return (
        <div className={'App'}>

            <button onClick={selectPosts}>{'posts'}</button>
            <button onClick={selectComments}>{'comments'}</button>
            <button onClick={selectAlbums}>{'albums'}</button>
            <button onClick={selectPhotos}>{'photos'}</button>
            <button onClick={selectTodos}>{'todos'}</button>
            <button onClick={selectUsers}>{'users'}</button>

            <hr/>

            <div>

                {/*{!todos.length && isLoadin && (<h1>LOADING DATA...</h1>)}*/}
                {!todo && isLoadin && (<h1>LOADING DATA...</h1>)}

                {/*{!!todos.length && (*/}
                {!!todo && (
                    <>
                        <hr/>
                        <h3>{todo.title} - {todo.completed.toString()} - {todo.id}</h3>
                        <hr/>
                    </>
                )}

            </div>

        </div>
    );
}

export default App;


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