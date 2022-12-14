//*![CRUD] Javascript Básico

const miniInstagram = {
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
};

//----------------------------------------------------------------
//*CREATE
//função para criar posts
function createPost(data) {
  const { owner, content } = data;
  //metodo push para adicionar novo post
  miniRedeSocial.posts.push({
    //pega a quantidade de post e adiciona mais 1 para gerar um novo id
    id: miniRedeSocial.posts.length + 1,
    owner: owner,
    content: content,
  });
}

createPost({
  owner: "mrMilk",
  content: "Meu segundo comentário",
});
createPost({
  owner: "mrMilk",
  content: "Meu terceiro comentário",
});

//----------------------------------------------------------------

//*READ
//Faz a leitura dos posts, e retorn a lista atualizada.
function readPost() {
  return miniRedeSocial.posts;
}

//----------------------------------------------------------------

//*UPDATE
//Função para inserir uma modificação no conteudo do post
function updatePost(id, newPost) {
  const selectedPost = readPost().find((post) => {
    //retorna o post selecionado pela id
    return post.id === id;
  });
  //adiciona a nova modificação ao post selecionado pela id
  selectedPost.content = newPost;
}
updatePost(2, "Eu mudei este comentário com UPDATE");

//----------------------------------------------------------------

//*DELETE
//Funça para apagar o post selecionado
function deletePost(id) {
  //seleciona o post pela id
  const listPostUpdated = readPost().filter((currentPost) => {
    //retorna os posts diferentes do id selecionado
    return currentPost.id !== id;
  });
  //atualiza a lista de posts pegando o retorno dos posts que foram diferentes da id selecionada
  miniRedeSocial.posts = listPostUpdated;
}

deletePost(1);

console.log(readPost());
