import { Component } from "react";

import "./styles.css";

import { loadPost } from "../../util/loadPost";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

//Isso é modulos dentro das class components
//  handlePClicado = () => {//arrow function no metodo é evita ter q fazer o bind
//   this.setState({ name: "Luis"})
// }

// handleAClique = (e) =>{
//   const {counter} = this.state;
//   e.preventDefault();
//   this.setState({counter: counter + 1});
// }

export class Home extends Component {
  //field Class, sem constructor
  state = {
    posts: [],
    allPost: [],
    page: 0,
    postsPage: 8,
    searchValue: "",
  };

  //Função é chamada quando o render é chamado
  //Isso é o componente acabou de ser montado
  async componentDidMount() {
    await this.handleLoadPosts();
  }

  handleLoadPosts = async () => {
    const { page, postsPage } = this.state;
    const postsAndPhotos = await loadPost();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPage),
      allPost: postsAndPhotos,
    });
  };

  handleLoadMorePosts = () => {
    const { page, postsPage, allPost, posts } = this.state;
    const nextPage = page + postsPage;
    const nextPosts = allPost.slice(nextPage, nextPage + postsPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ ...this.state, searchValue: value });
  };

  //função é chamada quando o componente é atualizado
  //=>componentDidUpdate(){}

  //função é chamado quando o componente for desmontado
  //=>componentWillUnmount(){}

  //handle + nome da função é o padrão do react, para se criar metodos

  render() {
    const { posts, page, postsPage, allPost, searchValue } = this.state;
    const noMorePosts = page + postsPage >= allPost.length;

    const filteredPosts = !!searchValue
      ? allPost.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <Container>
        <div className="searchContainer">
          {!!searchValue && (
            //Isso aqui é uma avaliação de curto circuito JavaScript
            //Na avaliação de curto circuito esse simbolo: !! transforma algo em bolean
            //Isso quer dizer se searchValue for true mostre:
            <h1>Search: {searchValue}</h1>
          )}
          <TextInput
            inputValue={searchValue}
            actionFn={this.handleChange}
          />
        </div>

        {filteredPosts.length > 0 ? (
          <Posts posts={filteredPosts} />
        ) : (
          <p>Não existe posts</p>
        )}

        <div className="buttonContainer">
          {!searchValue && (
            //na avaliação de curto circuito o simbolo: ! significa uma negação
            //isso quer dizer q se searchValue for false mostre:
            <Button
              disabled={noMorePosts}
              text="More Posts"
              onClick={this.handleLoadMorePosts}
            />
          )}
        </div>
      </Container>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//            Ola Mundo
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
