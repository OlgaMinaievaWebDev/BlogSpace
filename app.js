let postsArray = [];
const titleInp = document.getElementById("post-title");
const bodyInp = document.getElementById("post-body");
const form = document.getElementById("new-post");

function renderPosts() {
  let html = "";
  postsArray.forEach(function (post) {
    html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
       `;
  });
  document.getElementById("blog-list").innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts();
  });

// event
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = titleInp.value;
  const postBody = bodyInp.value;
  const data = {
    title: postTitle,
    body: postBody,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((response) => response.json())
    .then((post) => {
      postsArray.unshift(post);
      renderPosts();
      form.reset();
    });
});
