const posts = [
  {
    name: "Business Master",
    username: "businessmaster_",
    location: "29105 Dante Spurs, Lake Venessa, MN 06225-5841",
    avatar: "images/user-1.jpg",
    post: "images/user-post-1.jpg",
    comment: "Exactly. I mean if it's a joke it's a really silly one..!",
    likes: 210,
  },
  {
    name: "Wealthy Executive",
    username: "wealthyexecutive_123",
    location: "51613 Rubin Islands, Wynonaside, ID 30966-8057",
    avatar: "images/user-2.jpg",
    post: "images/user-post-2.jpg",
    comment: "Now, can we go back to some basics? Absolute mewling!!!!!!",
    likes: 45,
  },
  {
    name: "TheFinanceGuru",
    username: "The_FinanceGuru@123",
    location: "501 Lorenzo Park, Kentwood, Arkansas - 86182, Mayotte",
    avatar: "images/user-3.jpg",
    post: "images/user-post-3.jpg",
    comment:
      "Why oh why oh why oh why? Said it before and I'll say it again!!",
    likes: 228,
  },
];

function mainSectionFunction() {
  posts.forEach((post) => {
    document.getElementById("main-section").innerHTML += 
    `<section class="post-section">
        <div class="user-details-div">
            <img class="avatar-image" src="${post.avatar}" alt="Ducreux">
            <div class="user-description">
                <h3>${post.name}</h3>
                <p>${post.location}</p>
            </div>
        </div>
        <img class="post-img" src="${post.post}" alt="${post.name}">
        <div class="interaction-div">
            <img src="images/icon-heart.png" alt="Likes">
            <img src="images/icon-comment.png" alt="Comment">
            <img src="images/icon-dm.png" alt="Share">
        </div>
        <h4 class="likes">${post.likes} likes</h4>
        <p class="comments">
            <span>${post.username}</span> &nbsp;${post.comment}
        </p>
        <div class="gap-div"></div>
    </section>
    `;
  });
}

mainSectionFunction()