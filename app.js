let postsArray = [];

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
document.getElementById("new-post").addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = document.getElementById("post-title").value;
  const postBody = document.getElementById("post-body").value;
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
      document.getElementById("blog-list").innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <hr/>
          ${document.getElementById("blog-list").innerHTML}
          `;
    });
});
