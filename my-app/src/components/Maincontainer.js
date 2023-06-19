import { Topbar } from "../components/Topbar";
import Kanban from "../components/Kanban";
import Pen from "../icons/arrow-square-up.png";
import Share from "../icons/Group 626.png";
import AddSquare from "../icons/add-square2.png";
import Invitee from "../icons/Group 642.png";
import Input from "../components/Dropdown";
import Filter from "../icons/filter.png";
import Calender from "../icons/calendar.png";
import Profile from "../icons/profile-2user.png";
import Rod from "../icons/Vector 10.png";
import Group from "../icons/Group 612.png";
import Menu from "../icons/menu.png";
import { isMobile } from "react-device-detect";

export function MainContainer() {
  return (
    <div className="main-container">
      <Topbar />
      <div className="kanban-container">
        <div className="kanban-container-top">
          <div className="invite-section-container">
            <div className="invite-section-container-left">
              <div className="invite-section-title">Mobile App</div>
              <div style={{ marginTop: 18.5, display: "flex", gap: 17 }}>
                <img src={Pen} alt="pen" width="24px" height="24px" />
                <img src={Share} alt="share" width="24px" height="24px" />
              </div>
            </div>
            <div className="invite-section-container-right">
              <div style={{ marginTop: 10, display: "flex", gap: 8.5 }}>
                <img src={AddSquare} alt="ad-square" width={15} height={15} />
                <div className="invite-title">Invite</div>
              </div>
              <div className="invitee">
                <img src={Invitee} alt="invitee" width={158} height={38} />
              </div>
            </div>
          </div>
          <div className="filter-section-container">
            <div className="filter-section-container-left">
              <Input icon={Filter} title={"Filter"} isDropdown={true} />
              <Input icon={Calender} title={"Today"} isDropdown={true} />
            </div>
            <div className="filter-section-container-right">
              <div style={{ display: "flex", gap: 20 }}>
                <Input icon={Profile} title="Share" />
                {!isMobile && (
                  <img
                    height={28}
                    style={{ margin: "auto" }}
                    src={Rod}
                    alt="rod"
                  />
                )}
                {!isMobile && (
                  <img height={40} width={40} src={Group} alt="rod" />
                )}
              </div>
              {!isMobile && (
                <img width={21} height={21} src={Menu} alt="menu" />
              )}
            </div>
          </div>
        </div>
        <div className="kanban-container-bottom">
          <Kanban />
        </div>
      </div>
    </div>
  );
}
