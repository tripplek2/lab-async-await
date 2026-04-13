const postList = document.getElementById("post-list");
const loadBtn = document.getElementById("load-btn");

// fetch posts using async
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    displayPosts(data);
  } catch (error) {
    console.log("Error:", error);  
  }
}

// displaying posts
function displayPosts(posts) {
  postList.innerHTML = "";

  // Random 10 posts
  const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 10);

  randomPosts.forEach(post => {
    const li = document.createElement("li");

    li.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;

    postList.appendChild(li);
  });
}

getPosts();

if (loadBtn) {
  loadBtn.addEventListener("click", getPosts);
}