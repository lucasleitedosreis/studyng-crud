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
  miniInstagram.posts.push({
    id: miniInstagram.posts.length + 1,
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
function readPost() {
  return miniInstagram.posts;
}

//----------------------------------------------------------------

//*UPDATE
function updatePost(id, newPost) {
  const selectedPost = readPost().find((post) => {
    return post.id === id;
  });
  selectedPost.content = newPost;
}
updatePost(2, "Eu mudei este comentário com UPDATE");

//----------------------------------------------------------------

//*DELETE
function deletePost(id) {
  const listPostUpdated = readPost().filter((currentPost) => {
    //retorna os posts diferentes do id selecionado
    return currentPost.id !== id;
  });
  //atualiza a lista de posts
  miniInstagram.posts = listPostUpdated;
}

deletePost(1);

console.log(readPost());
