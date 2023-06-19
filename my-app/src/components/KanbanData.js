import { v4 as uuidv4 } from "uuid";

import Solo from "../icons/Ellipse 12.png";
import Trio from "../icons/Group 633.png";

export const data = [
  {
    id: "1",
    TaskName: "Task1",
    Task: "Brainstorming brings team members' diverse experience into play.",
    // Assigned_To: 'Beltran',
    // Assignee: 'Romona',
    // Status: 'To-do',
    Priority: "Low",
    Due_Date: "25-May-2020",
    Comments: 12,
    Files: 3,
    Invitee: Solo,
  },
  {
    id: "2",
    TaskName: "Brainstorming",
    // Task: "User research helps you to create an optimal product for users.",
    // Assigned_To: 'Dave',
    // Assignee: 'Romona',
    // Status: 'To-do',
    Priority: "Low",
    Due_Date: "26-May-2020",
    Comments: 2,
    Files: 3,
    Invitee: Trio,
  },
  {
    id: "3",
    TaskName: "Research",
    Task: "Handle Door Specs",
    // Assigned_To: 'Roman',
    // Assignee: 'Romona',
    // Status: 'To-do',
    Priority: "High",
    Due_Date: "27-May-2020",
    Comments: 32,
    Files: 4,
  },
  {
    id: "4",
    Task: "Low fidelity wireframes include the most basic content and visuals.",
    TaskName: "Mobile App Design",
    // Assigned_To: 'Gawen',
    // Assignee: 'Kai',
    // Status: 'Done',
    Priority: "Medium",
    Due_Date: "23-Aug-2020",
    Comments: 12,
    Files: 3,
  },
  {
    id: "5",
    Task: "It just needs to adapt the UI from what you did before",
    TaskName: "Design System",
    // Assigned_To: 'Bondon',
    // Assignee: 'Antoinette',
    // Status: 'In Progress',
    Priority: "Completed",
    Due_Date: "05-Jan-2021",
    Comments: 12,
    Files: 3,
    Invitee: Trio,
  },
];

export const columnsFromBackend = {
  [uuidv4()]: {
    title: "To-do",
    items: data,
    color: "#5030E5",
  },
  [uuidv4()]: {
    title: "On Progress",
    items: [],
    color: "#FFA500",
  },
  [uuidv4()]: {
    title: "Done",
    items: [],
    color: "#8BC48A",
  },
};
