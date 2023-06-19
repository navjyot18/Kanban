import logo from "../icons/search-normal.png";
import Calender from "../icons/calendar-2.png";
import MessageQuestion from "../icons/message-question.png";
import Notification from "../icons/notification.png";
import Image from "../icons/image.png";
import Vector from "../icons/Vector.png";
export function Topbar() {
  const alerts = [Calender, MessageQuestion, Notification];
  const userData = {
    name: "Anima Agrawal",
    address: "U.P, India",
    profilePicture: Image,
  };
  return (
    <div className="topbar">
      <div className="input_container">
        <div className="search_icon">
          <img alt="search-icon" src={logo} width={"100%"} height={"100%"} />
        </div>
        <input className="topbar_input" placeholder="Search for anything..." />
      </div>
      <div className="profile-notification-container">
        <div className="notification-container">
          {alerts.map((alert) => (
            <div style={{ width: 24, height: 24 }}>
              <img width="100%" height="100%" src={alert} alt="alert_icons" />
            </div>
          ))}
        </div>
        <div className="profile-container">
          <div className="profile-desc">
            <div className="profile-name">{userData.name}</div>
            <div className="profile-address">{userData.address}</div>
          </div>
          <div className="profile-pic">
            <img
              alt="profile-photo"
              src={Image}
              width="100%"
              height="100%"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="profile-more-details">
            <img alt="more-details" src={Vector} width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
