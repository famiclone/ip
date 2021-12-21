fetch('./db.json')
  .then((data) => data.json())
  .then((posts) => {
    const postListEl = document.querySelector('main');

    postListEl.innerHTML = posts.feed
      .map((post) => {
        const date = new Date(post.created_at);
        return `
        <div class="card">
          <div class="user-avatar">
            <img src="${post.user.avatar}" />
          </div>

          <div class="post-body">
            <div class="post-header">
              <b>@${post.user.username}</b>
              <div class="muted"> ∙ ${date.getDate()}${date.toLocaleString(
          'default',
          {
            month: 'long',
          },
        )}
              </div>

              
            </div>
            <div class="post">
              <p>
                ${post.text}
              </p>

              <div class="muted">Likes: ${post.likes}</div>
            </div>
          </div>
        </div>
      `;
      })
      .join('');
  });
