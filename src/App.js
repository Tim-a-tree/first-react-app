import logo from './logo.svg';
import './App.css';

function Header() {
  return <header>
    <h1><a href="/index.html">WEB - Login</a></h1>
  </header>
}

function Article(props)
{
  console.log('props', props);
  return <article>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </article>
}

function Nav(props)
{
  // const tag = []
  // for (let i = 0; i < props.data.length; i++)
  // {
  //   tag.push(<li key={props.data[i].id}><a href={'/read' + props.data[i].id}>{props.data[i].title}</a></li>);
  // }


  // function callback(element) {
  //   return <li key={element.id}>
  //     <a href={'/read/' + element.id}>
  //       {element.title}
  //     </a>
  //   </li>
  // }


  const callback = (el) => {
    return <li key={el.id}>
      <a href={'/read/' + el.id}>
        {el.title}
      </a>
    </li>
  }
  const tag = props.data.map(callback);
  return <nav>
    <ol>
      {tag}
    </ol>
  </nav>
}


function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ....' },
    { id: 2, title: 'css', body: 'css is ....' },
    { id: 3, title: 'javascript', body: 'javascript is ....' }
  ]
  return (
    <div className="App">
      <Header></Header>
      <Nav data={topics}></Nav>
      <Article title="HTML" body="Hello, WEB"></Article>
      <Article title="CSS" body="Hello, WEB-CSS"></Article>
    </div>
  );
}

export default App;
