import React from "react"

const Loading = ({ status }) => {
    return (
        status === "loading" && (
            <div className="p-4 text-2xl font-bold">
                <h2>Loading...</h2>
            </div>
        )
    )
}

export default Loading
