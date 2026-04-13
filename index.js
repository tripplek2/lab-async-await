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

posts.forEach(post => {
  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  const p = document.createElement("p")

  h1.textContent = post.title;
  p.textContent = post.body;

  li.appendChild(h1);
  li.appendChild(p);
  postList.appendChild(li);
});
}

getPosts();