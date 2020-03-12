import React from "react"
import { Header } from "./components/layouts/Header"
import { Sidebar } from "./components/layouts/Sidebar"

export const App = () => {
    return (
        <div className="App">
            <Header />
            <Sidebar />
        </div>
    )
}
