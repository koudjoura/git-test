function Post({ user, message, visibility }) {
    return (
      <div className="post">
        <h2>{user}</h2>
        <p>{message}</p>
        {visibility === "public" && <span>Visible to everyone</span>}
        {visibility === "friends" && <span>Visible to friends only</span>}
        {visibility === "private" && <span>Visible only to you</span>}
      </div>
    );
  }
  
  function App() {
    const posts = [
      { user: "Fifina", message: "Hello, everyone!", visibility: "public" },
      { user: "John", message: "Just had a great day at the beach.", visibility: "friends" },
      { user: "Sarah", message: "Reminder to myself: Buy groceries.", visibility: "private" },
    ];
  
    return (
      <div>
        <h1>Posts</h1>
        {posts.map((post) => (
          <Post key={post.user} {...post} />
        ))}
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  

