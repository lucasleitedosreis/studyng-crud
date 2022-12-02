//*![CRUD] Javascript Básico

const miniInstagram = {
  users: [
    {
      username: "lukasleite",
    },
  ],
  posts: [
    {
      owner: "lukasleite",
      content: "Meu primeiro comentário",
    },
  ],
};

//----------------------------------------------------------------
//*CREATE
function createPost(data) {
  miniInstagram.posts.push({
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
console.log("🚀 ~ file: script.js:35 ~ readPost ~ readPost", readPost());

//----------------------------------------------------------------

//*UPDATE
//*DELETE
