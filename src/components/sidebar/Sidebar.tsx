import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Sidebar.scss";
import SidebarChannel from "./SidebarChannel";
import { auth } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import useCollection from "../../hooks/useCollection";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);
  const { documents: channels } = useCollection("channels");

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo_discord.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo512.png" alt="" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon />
          </div>
          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidebarChannel key={channel.id} channel={channel} />
            ))}
          </div>
          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img
                src={user?.photo}
                alt={user?.displayName}
                onClick={() => auth.signOut()}
              />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>
            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
