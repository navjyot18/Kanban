import Home from "../icons/category.png";
import Messages from "../icons/message.png";
import Tasks from "../icons/task-square.png";
import Members from "../icons/profile-2user.png";
import Settings from "../icons/setting-2.png";
import Colorfilter from "../icons/colorfilter.png";
import Toggle from "../icons/toggle.png";
import Add from "../icons/add-square.png";
import ThreeDots from "../icons/three_dots.png";
import Lamp from "../icons/lamp-on.png";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export function LeftBar() {
  const profileDescription = {
    Name: "Project M.",
    profilePicture: Colorfilter,
  };
  const menubar = [
    {
      tab: "Home",
      icon: Home,
    },
    {
      tab: "Messages",
      icon: Messages,
    },
    {
      tab: "Tasks",
      icon: Tasks,
    },
    {
      tab: "Members",
      icon: Members,
    },
    {
      tab: "Settings",
      icon: Settings,
    },
  ];

  const myProjects = [
    {
      projectName: "Mobile App",
      icon: "#7AC555",
      isCurrentTab: true,
    },
    {
      projectName: "Website Redesign",
      icon: "#FFA500",
      isCurrentTab: false,
    },
    {
      projectName: "Design System",
      icon: "#E4CCFD",
      isCurrentTab: false,
    },
    {
      projectName: "Wireframes",
      icon: "#76A5EA",
      isCurrentTab: false,
    },
  ];
  return (
    <>
      {!isMobile ? (
        <div className="left-bar">
          <div className="top-profile">
            <div className="top-profile-desc">
              <div className="top-profile-pic">
                <img
                  src={profileDescription.profilePicture}
                  alt="top-profile-pic"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="top-profile-name">{profileDescription.Name}</div>
            </div>
            <div className="top-profile-toggle">
              <img src={Toggle} alt="toggle" width="100%" height="100%" />
            </div>
          </div>
          <div className="tab-container">
            <div className="tab-section">
              {menubar.map((menu) => (
                <div className="tab">
                  <div className="tab-icon">
                    <img
                      src={menu.icon}
                      alt="tab-icon"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="tab-name">{menu.tab}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="projects-section">
            <div className="project-section-header">
              <div className="project-section-title">MY PROJECTS</div>
              <div className="add-project-icon">
                <img
                  src={Add}
                  alt="add-project-icon"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="project-list-container">
              {myProjects.map((project) => (
                <div
                  className="individual-project"
                  style={{
                    color:
                      project.isCurrentTab === true ? "#0D062D" : "#787486",
                    borderRadius: project.isCurrentTab === true ? 6 : 0,
                    padding: project.isCurrentTab ? "10px 0px" : 0,
                    background:
                      project.isCurrentTab === true
                        ? "rgba(80, 48, 229, 0.08)"
                        : "ffffff",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      background: project.icon,
                      borderRadius: "50%",
                      marginLeft: 12,
                    }}
                  ></div>
                  <div className="project-name">{project.projectName}</div>
                  <>
                    {project.isCurrentTab && (
                      <img
                        src={ThreeDots}
                        alt="current-tab-selector"
                        height="5px"
                        style={{ marginLeft: "auto", marginRight: 14 }}
                      />
                    )}
                  </>
                </div>
              ))}
            </div>
          </div>
          <div className="thoughts-wrapper">
            <div className="bulb-container">
              <img
                src={Lamp}
                alt="lamp"
                width="24px"
                height="24px"
                style={{
                  position: "relative",
                  top: "12px",
                }}
              />
            </div>
            <div className="thoughts-container">
              <div className="thoughts-title">Thoughts Time</div>
              <div className="thoughts-description">
                We don’t have any notice for you, till then you can share your
                thoughts with your peers.
              </div>
              <div className="thoughts-footer">Write a message</div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid #dbdbdb",
          }}
        >
          <img
            src={profileDescription.profilePicture}
            alt="top-profile-pic"
            width={"24px"}
            height={"24px"}
            style={{
              padding: "22px 50.5px 42px 48.5px",
              borderBottom: "1px solid #dbdbdb",
            }}
          />

          <div className="mobile-menu">
            {menubar.map((menu) => (
              <img src={menu.icon} alt="tab-icon" width="24px" height="24px" />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
