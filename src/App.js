import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom';

function Header(props){
  return <header>
    <h1><Link to="/" >WEB</Link></h1>
  </header>
}
function Nav(props){
  return <nav>
    <ol>
      {props.data.map(el => <li key={el.id}>
        <Link to={'/read/'+el.id}>
          {el.title}
        </Link>
      </li>)}
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>;
}

function Read(props)
{
  const params = useParams();
  const id = Number(params.id);
  const topic = props.data.filter(el => el.id === id)[0];
  return <Article title={topic.title} body={topic.body} ></Article>
}

function Web()
{
  return <Article title="Welcome" body="Hello, WEB"></Article>
}

function Create(props)
{
  return (
    <article body="Welcome to creation page">
      <h1>Create</h1>
      <form action="/api/create" onSubmit={event => {
        event.preventDefault();
        var title = event.target.title.value;
        var body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="제목"/></p>
        <p><textarea name="body" placeholder="본문"></textarea></p>
        <p><input type="submit" value="생성"></input></p>
        
      </form>
  </article>
  ); 
}

function App() {
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ])
  const navigate = useNavigate();
  return (
    <div style={{border: '1px solid red'}}>
        <Header></Header>
        <Nav data={topics}></Nav>
      {/* {content} */}
      <Routes>
        <Route path="/" element={<Web></Web>}></Route>
        <Route path="/read/:id" element={<Read data={topics}></Read>}></Route>
        <Route path="/create" element={<Create onCreate={(title, body) => {
          const newTopics = [...topics];
          newTopics.push({ id: nextId, title: title, body: body });
          setTopics(newTopics);
          navigate('/read/' + nextId);
          setNextId(nextId + 1);
        }}></Create>}></Route>
      </Routes>
      <Link to="/create">create</Link>
    </div>
  );
}

export default App;

