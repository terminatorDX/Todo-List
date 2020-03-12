import React from "react"
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendar,
    FaRegCalendarAlt
} from "react-icons/fa"

export function Sidebar() {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar_generic">
                <li>
                    <span>
                        <FaInbox />
                    </span>
                    <span>Inbox</span>
                </li>
                <li>
                    {" "}
                    <span>
                        <FaRegCalendar />
                    </span>
                    <span>Today</span>
                </li>
                <li>
                    {" "}
                    <span>
                        <FaRegCalendarAlt />
                    </span>
                    <span>Next 7 Days</span>
                </li>
            </ul>
            <div className="sidebar_middle">
                <span>
                    <FaChevronDown />
                </span>
                <h2>Projects</h2>
            </div>
            <ul className="sidebar_projects">Projects will be here!</ul>
            Add Project component here
        </div>
    )
}
