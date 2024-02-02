import EditCrewMember from "./EditCrewMember";
import DeleteCrewMember from "./DeleteCrewMember";

function Crew(props) {
return (
<div className="w-96 xl:h-54 px-10 py-8 my-8 max-w-sm mx-4 my-4 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img
    className="block mx-auto h-28 w-28 object-cover rounded-full sm:mx-0 sm:shrink-0"
    src={props.img}
    alt=""
    />
    <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
        <p className="text-2xl text-black font-semibold">{props.name}</p>
        <p className="text-slate-500 font-medium">{props.role}</p>
    </div>
    <EditCrewMember
        id={props.id}
        name={props.name}
        role={props.role}
        updateCrewMember={props.updateCrewMember}
    />
    <DeleteCrewMember
        id = {props.id} 
        name={props.name} 
        role={props.role} 
        img = {props.img}
        DeleteCrewMember={props.deleteCrewMember}
    />
    </div>
</div>
);
}

export default Crew;
