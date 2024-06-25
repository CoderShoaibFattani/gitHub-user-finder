const input = document.getElementById("user-name");
const searchBtn = document.getElementById("search-btn");
const userInfo = document.getElementById("user-info");

let userData = async () => {
  if (input.value) {
    const response = await fetch(
      `https://api.github.com/users/${input.value.trim()}`
    );
    const data = await response.json();
    console.log(data);
    const html = `
        <div class="col-md-6">
            <div class="weather-card p-4">
                 <div class="d-flex justify-content-between align-items-center mb-4">
                    <h2><a href="${data.url}" class="text-black text-decoration-none">${data.name}</a></h2>
                    <img src="${data.avatar_url}" alt="user avator" class="weather-icon">
                </div>
                  <p class="lead weather-description mb-4">${data.bio}</p>
                  <div class="row">
                      <div class="col-sm-6">
                          <div class="detail-box">
                          Followers: ${data.followers}
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="detail-box">
                           Following: ${data.following}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
    userInfo.innerHTML = html;
  }
};

searchBtn.addEventListener("click", userData);
