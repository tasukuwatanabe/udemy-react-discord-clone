import "./Sidebar.scss";

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
        <h3></h3>
      </div>
    </div>
  );
};

export default Sidebar;
