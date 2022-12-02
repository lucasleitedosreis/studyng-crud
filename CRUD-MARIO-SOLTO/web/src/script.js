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
function createPost(data) {
  miniInstagram.posts.push({
    id: miniInstagram.posts.length + 1,
    owner: data.owner,
    content: data.content,
  });
}

createPost({
  owner: "mrMilk",
  content: "Meu segundo comentário",
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
updatePost(1, "Eu mudei este comentário com UPDATE");
console.log("🚀 ~ file: script.js:37 ~ readPost ~ readPost", readPost());
//----------------------------------------------------------------

//*DELETE
