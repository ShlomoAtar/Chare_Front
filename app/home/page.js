import PostList from "@/utils/components/postList/postList";
import "./style.css"
import FriendsList from "@/utils/components/friendsList/friendsList";

export default function Page() {
  return (
    <div>
      {/* <FriendsList/> */}
      <PostList/>
    </div>
  );
}