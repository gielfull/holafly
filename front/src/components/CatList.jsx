import React from "react"

const CatList = ({ setKat, data, kat }) => {

    const selectKat = (kitten) => {
        setKat(kitten)
    }

    return (
        <div className="lg:w-1/6 md:w-1/4 w-[120px] max-h-256 overflow-y-scroll">
            {data.map((kitten) => (
                <div
                    key={kitten.id}
                    className={`${
                        kat?.id === kitten.id && "bg-yellow-200 border-yellow-400"
                    } flex gap-4 flex-col lg:flex-row m-2 items-center border-l-4 ${
                        kitten.gender == "male" ? "border-blue-400" : "border-rose-400"
                    } hover:border-l-4 hover:border-yellow-400 hover:bg-yellow-200 cursor-pointer`}
                    onClick={() => selectKat(kitten)}
                >
                    <img
                        className="lg:w-24 lg:h-24 w-14 h-14 rounded-[4px]"
                        src={`${process.env.REACT_APP_API_URL}/images/${kitten.imageFileName}`}
                    />
                    <div className="text-center sm:text-left">
                        <p className="font-bold">{kitten.name}</p>
                        <p className="italic text-sm">{kitten.age}</p>
                        <p className="italic text-sm">{kitten.gender}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CatList
