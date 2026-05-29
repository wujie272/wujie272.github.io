var posts=["2025/09/30/ARP断网攻击与监听/","2025/03/01/如何在Linux运行Windows exe软件/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };