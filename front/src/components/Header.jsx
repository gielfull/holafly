import React from "react"

const Header = () => {
    return (
        <div className="flex justify-between p-4 border-b-[1px] border-b-black-50">
            <div className="font-bold text-2xl">
                KAT <span className="text-blue-400">Finder</span>
            </div>
            <div className="flex gap-10 items-center">
                <a href="#" className="menu-item-active font-bold border-b-4 border-blue-400">
                    Explore
                </a>
                <a href="#" className="bg-blue-500 text-white font-bold px-4 py-1 rounded-[4px]">
                    Submit Kitty
                </a>
            </div>
        </div>
    )
}

export default Header
