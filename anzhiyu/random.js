var posts=["posts/8d314bc5.html","posts/bdc86207.html","posts/9a4b3cda.html","posts/56c3f59a.html","posts/e460eaa8.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };