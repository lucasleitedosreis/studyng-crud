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

  //----------------------------------------------------------------

  //CREATE
  //função para criar posts
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
    $postList.insertAdjacentHTML("afterend", `<li>${content}</li>`);
  },
};
//CRUD: [READ]
miniRedeSocial.posts.forEach(({ owner, content }) => {
  miniRedeSocial.createPost({ owner: owner, content: content });
});

//CRUD: [CREATE POST] PEGA O VALUE E MANDA PARA A FUNÇAO CreatePost
$myForm.addEventListener("submit", function createPostController(e) {
  e.preventDefault();
  const $postValue = $myInput.value;
  miniRedeSocial.createPost({ owner: "lukasleite", content: $postValue });
  $myInput.value = "";
});
