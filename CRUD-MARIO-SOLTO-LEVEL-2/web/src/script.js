"use stric";
const $myForm = document.querySelector("form");
const $myInput = document.querySelector('input[name="create-post"]');

//BASE DE DADOS
const miniRedeSocial = {
  users: [
    {
      username: "lukasleite",
    },
  ],
  posts: [
    {
      id: Date.now(),
      owner: "lukasleite",
      content: "Meu primeiro comentário",
    },
  ],
  //CRUD: [READ] Leitura dos Posts
  readPosts() {
    miniRedeSocial.posts.forEach(({ id, owner, content }) => {
      miniRedeSocial.createPost({ id, owner: owner, content: content }, true);
    });
  },
  //CREATE função para criar posts na memória array/objeto
  createPost(data, htmlOnly = false) {
    const { owner, content } = data;
    const internalId = Date.now();
    if (!htmlOnly) {
      //metodo push para adicionar novo post
      miniRedeSocial.posts.push({
        //pega a quantidade de post e adiciona mais 1 para gerar um novo id
        id: data.id || internalId,
        owner: owner,
        content: content,
      });
    }
    //Cria post no html
    const $postList = document.querySelector(".post-list");
    $postList.insertAdjacentHTML(
      "afterbegin",
      ` <li data-id="${internalId}">
      <button class="btn-delete" >Delete</button>
      ${content}
      </li>`
    );
  },
  postDelete(id) {
    //seleciona o post pela id
    const listPostUpdated = miniRedeSocial.posts.filter((currentPost) => {
      //retorna os posts diferentes do id selecionado
      return currentPost.id !== Number(id);
    });
    //atualiza a lista de posts pegando o retorno dos posts que foram diferentes da id selecionada
    miniRedeSocial.posts = listPostUpdated;
  },
};

//CRUD: [READ]
miniRedeSocial.readPosts();

//CRUD: [CREATE] PEGA O VALUE E MANDA PARA A FUNÇAO CreatePost
$myForm.addEventListener("submit", function createPostController(e) {
  e.preventDefault();
  const $postValue = $myInput.value;
  miniRedeSocial.createPost({ owner: "lukasleite", content: $postValue });
  $myInput.value = "";
});

//CRUD: [DELETE]
document
  .querySelector(".post-list")
  .addEventListener("click", function (event) {
    const element = event.target;
    const isBtnDeleteClick = element.classList.contains("btn-delete");
    if (isBtnDeleteClick) {
      const id = element.parentNode.getAttribute("data-id");
      miniRedeSocial.postDelete({ id });
      element.parentNode.remove();
    }
  });
