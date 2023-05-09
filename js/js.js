let searchQuery = "";
  const searchForm = document.querySelector("#form");
const searchResultDiv = document.querySelector("#result");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector(".search-inp").value;
  fetchAPI();
});

async function fetchAPI() { 
  const response = await fetch(`https://google.serper.dev/search?api_key=04f6bf5948bcbf2699a69c9a55883ece37793469&q=${searchQuery}`);
  const data = await response.json();
  generateHTML(data.organic);
  console.log(data);
}

function generateHTML(results) {
  searchResultDiv.innerHTML =""
  results.map((result) => {
    searchResultDiv.innerHTML += `
    <div class="link">
      <p class="link-site"><a href="${result.link}">${result.link}</a></p><br>
      <h2><a href="${result.link}">${result.title}</a></h2><br>
      <p class="snippet"><a href="${result.link}">${result.snippet}</a></p>
   </div>
    `;
  });
}
