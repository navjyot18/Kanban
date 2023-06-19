import React, { useState } from "react";
import styled from "@emotion/styled";
import { columnsFromBackend } from "./KanbanData";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import AddSquare from "../icons/add-square2.png";
const Container = styled.div`
  display: flex;
`;

const TaskList = styled("div")`
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  border-radius: 16px 16px 0px 0px;
  width: inherit;
  padding: 20px;
  //margin-right: 45px;
  height: 600px;
  overflow-y: scroll;
  @media all and (max-width: 768px) {
    display: ${(props) =>
      props.title === "On Progress" || props.title === "Done"
        ? "none"
        : "inherit"};
  }
`;

const TaskColumnStyles = styled.div`
  margin-top: 42px;
  display: flex;
  width: 100%;
  height: 80vh;
  gap: 20px;
`;

const Title = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #0d062d;
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;

const Rod = styled("div")`
  height: 3px;
  background: ${(props) => props.color};
  margin-top: 21px;
`;

const ItemsCount = styled("div")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  width: 20px;
  height: 20px;
  background: #e0e0e0;
  border-radius: 10px;
  color: #625f6d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Kanban = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <Container>
        <TaskColumnStyles>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided, snapshot) => (
                  <TaskList
                    title={column.title}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          background: column.color,
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                        }}
                      ></div>
                      <Title>{column.title}</Title>
                      <ItemsCount>{column.items.length}</ItemsCount>
                      {column.title === "To-do" && (
                        <img
                          style={{ marginLeft: "auto" }}
                          src={AddSquare}
                          alt="add"
                          width={24}
                          height={24}
                        />
                      )}
                    </div>
                    <Rod color={column.color}></Rod>
                    {column.items.map((item, index) => (
                      <TaskCard key={item} item={item} index={index} />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            );
          })}
        </TaskColumnStyles>
      </Container>
    </DragDropContext>
  );
};

export default Kanban;
