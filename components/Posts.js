import Post from "./Post";
const DUMMY_DATA = [
  {
    id: "123",
    username: "akhil chaudhary",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Now this is how we roll ...<<BABY>>...",
  },
  {
    id: "123",
    username: "akhil chaudhary",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Now this is how we roll ...<<BABY>>...",
  },
];
function Posts() {
  return (
    <div>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
