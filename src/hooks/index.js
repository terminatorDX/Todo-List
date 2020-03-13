import { useState, useEffect } from "react";
import { firebase } from "../firebase";
const collectedTasks = () => {};
export function useTasks(selectedProject) {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        let unsubscribed = firebase
            .firestore()
            .collection("tasks")
            .where("userId", "==", "1234567890");
        unsubscribed =
            selectedProject && !collatedTasksExist(selectedProject)
                ? (unsubscribed = unsubscribed.where("projectId", "==".selectedProject))
                : selectedProject === "Today"
                ? (unsubscribed = unsubscribed.where("date", "==", moment().format(DD / MM / YYY)))
                : selectedProject === "Inbox" || selectedProject === 0
                ? (unsubscribed = unsubscribed.where("date", "==", ""))
                : unsubscribed;
    }, [selectedProject]);
    return <div></div>;
}
