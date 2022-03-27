import { useEffect, useState } from 'react';
import queryString from 'query-string';
import './App.scss';
import ColorBox from './components/Colorbox/ColorBox';
import Pagination from './components/Pagination/Pagination';
import PostList from './components/PostList/PostList';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoLost/TodoList';
import PostFilterForm from './components/PostFilterForm/PostFilterForm';
import Clock from './components/Clock/Clock';
import BetterClock from './components/BetterClock/BetterClock';
import MagicBox from './components/MagicBox/MagicBox';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'Chung 1',
    },
    {
      id: 2,
      title: 'Chung 2',
    },
    {
      id: 3,
      title: 'Chung 3',
    },
  ]);
  
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
  });

  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    async function fetchPostList() {
      try {
        // _limit=10&_page=1
        const paramsString = queryString.stringify(filter);
        
        const requesUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requesUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const {data, pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination)
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }   
    }

    fetchPostList();
  }, [filter]);

  const handleTodoClick = (todo) => {
    console.log(todo)
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  const handleTodoFormSubmit = (formValues) => {
    const newTodo = {
      id: todoList.length + 1, // id vi du thoi, chu khong dung lam dau
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  const handlePageChange = (newPage) => {
    console.log('Chung newPage', newPage)
    setFilter({
      ...filter,
      _page: newPage,
    })
  }

  const handleFilterChange = (newFilter) => {
    console.log("Chung FIlterChange: ", newFilter)
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm,
    })
  }


  return (
    <div className="app">
      <h1>Welcome to React Hooks!</h1>
      {/* <ColorBox/> */}
      {/* <TodoList 
        todos={todoList}
        onTodoClick={handleTodoClick}
        /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit}/> */}

      
      {/* <PostFilterForm onSubmit={handleFilterChange} /> */}
      {/* <PostList posts={postList} /> */}
      {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}

      {/* {showClock && <Clock/>} */}
      {/* <button onClick={() => setShowClock(false)} >Hide Clock</button> */}
      {/* <BetterClock/> */}

      <MagicBox/>
    </div>
  );
}

export default App;
