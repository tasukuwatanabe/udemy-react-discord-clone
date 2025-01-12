import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-left">
        <div className="server-icon">
          <img src="./logo192.png" alt="" />
        </div>
        <div className="server-icon">
          <img src="./logo512.png" alt="" />
        </div>
      </div>
      <div className="sidebar-right">
        <div className="sidebar-top">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebar-channels">
          <div className="sidebar-channels-header">
            <div className="sidebar-header">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
