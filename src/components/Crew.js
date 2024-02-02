function Crew(props) {
return (
<>
    <div className="w-96 xl:h-54 px-4 py-8 my-8 max-w-sm mx-4 my-4 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex flex-column sm:items-center sm:space-y-0 sm:space-x-6">
        {/* image and info */}
        <div className="grid grid-cols-2 items-center content-center">
            <img
            className="block mx-auto mt-2 h-28 w-28 object-cover rounded-full sm:mx-0 sm:shrink-0"
            src={props.img}
            alt=""
            />
            <div className="text-center mx-2 space-y-2 sm:text-left">
            <div className="space-y-0.5">
                <p className="text-2xl text-black font-semibold">{props.name}</p>
                <p className="text-slate-500 font-medium">{props.role}</p>
            </div>
            </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-3 ">
            {props.updateCrewMember}
            {props.deleteCrewMember}
        </div>
    </div>
</>
);
}

export default Crew;
