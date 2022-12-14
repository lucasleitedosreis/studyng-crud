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
      id: 1,
      owner: "lukasleite",
      content: "Meu primeiro comentário",
    },
  ],
  //CRUD: [READ] Leitura dos Posts
  readPosts() {
    miniRedeSocial.posts.forEach(({ owner, content }) => {
      miniRedeSocial.createPost({ owner: owner, content: content });
    });
  },
  //CREATE função para criar posts
  createPost(data) {
    const { owner, content } = data;
    //metodo push para adicionar novo post
    miniRedeSocial.posts.push({
      //pega a quantidade de post e adiciona mais 1 para gerar um novo id
      id: miniRedeSocial.posts.length + 1,
      owner: owner,
      content: content,
    });

    const $postList = document.querySelector(".post-list");
    $postList.insertAdjacentHTML(
      "afterbegin",
      ` <li>
      <button class="btn-delete" >Delete</button>
      ${content}
      </li>`
    );
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
      element.parentNode.remove();
    }
  });
