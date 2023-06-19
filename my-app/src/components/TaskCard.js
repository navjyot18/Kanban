import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import Comments from "../icons/message.png";
import Files from "../icons/Files.png";
import ThreeDots from "../icons/three_dots.png";
// import CustomAvatar from '../TableComponents/CustomAvatar'
// import { ReactComponent as RedArrow } from '../../assets/icons/High.svg'
// import { ReactComponent as YellowArrow } from '../../assets/icons/Medium.svg'
// import { ReactComponent as BlueArrow } from '../../assets/icons/Low.svg'

const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 106px;
  //max-width: 311px;
  //   background: ${({ isDragging }) =>
    isDragging ? "rgba(255, 59, 59, 0.15)" : "white"};
  background: #ffffff;
  border-radius: 16px;
  margin-top: 15px;

  .task-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    margin-top: 4px;
    color: #0d062d;
  }
  .task-desc {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: left;
    color: #787486;
    margin-top: 6px;
  }

  .secondary-details {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
    @media all and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  /* .priority{ */
  /* margin-right: 12px; */
  /* align-self: center;
    svg{
      width: 12px !important;
      height: 12px !important;
      margin-right: 12px; */
  /* margin-top: 2px; */
  /* } */
  /* } */
`;

const PriorityCard = styled("div")`
  padding: 4px 6px;
  color: ${(props) =>
    props.priority === "Low"
      ? "#D58D49"
      : props.priority === "Medium"
      ? "#FFA500"
      : props.priority === "High"
      ? "#D8727D"
      : "#68B266"};
  background: ${(props) =>
    props.priority === "Low"
      ? "rgba(223, 168, 116, 0.2)"
      : props.priority === "Medium"
      ? "rgba(203, 148, 96, 0.2)"
      : props.priority === "High"
      ? "rgba(216, 114, 125, 0.1)"
      : "rgba(131, 194, 157, 0.2)"};
  border-radius: 4px;
`;
const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <PriorityCard priority={item.Priority}>
                {item.Priority}
              </PriorityCard>
              <img
                src={ThreeDots}
                alt="current-tab-selector"
                height="5px"
                style={{ marginLeft: "auto", marginRight: 20 }}
              />
            </div>
            {}
            <div className="task-title">{item.TaskName}</div>
            <div className="task-desc">{item?.Task}</div>
            <div className="secondary-details">
              <p>
                <span>
                  {item?.Invitee && (
                    <img src={item.Invitee} alt="invitee" height={24} />
                  )}
                </span>
              </p>
              <div style={{ display: "flex", gap: 15 }}>
                <div style={{ display: "flex", gap: 5 }}>
                  <img src={Comments} alt="comments" width={14} height={14} />
                  <div>{item.Comments} comments</div>
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  <div>{item.Files} files</div>
                  <img src={Files} alt="files" width={14} height={14} />
                </div>
              </div>
            </div>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

// <span className="priority">
// {item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
// </span>
// <div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div>
