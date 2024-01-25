fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    let html = "";
    postsArr.forEach(function (post) {
      html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
       `;
    });
    document.getElementById("blog-list").innerHTML = html;
    console.log(html);
  });
