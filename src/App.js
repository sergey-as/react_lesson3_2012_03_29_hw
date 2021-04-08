import './App.css';
import {useState} from "react";

const url = 'https://jsonplaceholder.typicode.com/';

const App = () =>{
    const [list, setList] = useState('posts');


const selectPosts = (list) =>{
    setList({list});
    console.log(list);
}

  return(
      <div className={'App'}>

        {/*<button onClick={selectPosts}>{'posts'}</button>*/}
        <button onClick={selectPosts('posts')}>{'posts'}</button>
        {/*<button onClick={''}>{'comments'}</button>*/}
        {/*<button onClick={''}>{'albums'}</button>*/}
        {/*<button onClick={''}>{'photos'}</button>*/}
        {/*<button onClick={''}>{'todos'}</button>*/}
        {/*<button onClick={''}>{'users'}</button>*/}


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