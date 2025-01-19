import { Channel } from "./Sidebar";
import "./SidebarChannel.scss";

type Props = {
  channel: Channel;
};

const SidebarChannel = (props: Props) => {
  const { channel } = props;

  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.name}
      </h4>
    </div>
  );
};

export default SidebarChannel;
