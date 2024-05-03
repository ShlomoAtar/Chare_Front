
import Feed from "@/utils/components/feed/feed";
import "./style.css"
import FriendsList from "@/utils/components/friendsList/friendsList";

export default function Page() {
  return (
    <div className="page-container row">
      <Feed />
      <FriendsList />
    </div>
  );
}