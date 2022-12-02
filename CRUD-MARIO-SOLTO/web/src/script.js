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
console.log("🚀 ~ file: script.js:16 ~ miniInstagram", miniInstagram);

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

//*READ
//*UPDATE
//*DELETE
