import "./Index.css";
import Crew from "./components/Crew";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import AddCrewMember from "./components/AddCrewMember";

function App() {
  const [crewMembers, setCrewMembers] = useState([
    {
      id: 1,
      name: "D. Roger",
      role: "King Of Pirates",
      img: "https://cdn.pixabay.com/photo/2018/09/28/16/45/male-3709694_1280.jpg",
    },
    {
      id: 2,
      name: "Sanji",
      role: "Casanova",
      img: "https://cdn.pixabay.com/photo/2018/10/08/01/05/male-3731782_1280.jpg",
    },
    {
      id: 3,
      name: "Nami",
      role: "Navigator",
      img: "https://cdn.pixabay.com/photo/2018/09/04/08/23/girl-3653213_1280.jpg",
    },
    {
      id: 4,
      name: "Zoro",
      role: "Swordsman",
      img: "https://cdn.pixabay.com/photo/2018/10/01/00/46/male-3715098_1280.jpg",
    },
    {
      id: 5,
      name: "Chopper",
      role: "Doctor",
      img: "https://cdn.pixabay.com/photo/2018/09/14/00/45/toy-3676083_1280.jpg",
    },
    {
      id: 6,
      name: "Brock",
      role: "Skeleton",
      img: "https://cdn.pixabay.com/photo/2018/09/26/16/24/male-3704996_1280.jpg",
    },
    {
      id: 7,
      name: "White Beard",
      role: "Strongest Unko",
      img: "https://cdn.pixabay.com/photo/2018/09/30/00/40/toy-3712596_1280.jpg",
    },
    {
      id: 8,
      name: "Luffy",
      role: "Fifth Unko",
      img: "https://cdn.pixabay.com/photo/2017/07/08/16/06/one-piece-2484805_1280.jpg",
    },
    {
      id: 9,
      name: "Franckie",
      role: "Ship's Engineer",
      img: "https://cdn.pixabay.com/photo/2018/11/01/07/12/male-3787401_1280.jpg",
    },
    {
      id: 10,
      name: "Nico Robin",
      role: "Historian",
      img: "https://cdn.pixabay.com/photo/2018/09/30/00/44/toy-3712610_1280.jpg",
    },
    {
      id: 11,
      name: "Usopp",
      role: "Sniper",
      img: "https://cdn.pixabay.com/photo/2019/08/11/11/47/calm-usopp-4398785_1280.jpg",
    },
  ]);
  //updating crew members function 
  function updateCrewMember(id, newName, newRole) {
    console.log("Update crew member..........");
    const updatedCrewMembers = crewMembers.map((crewMember) => {
      if (id === crewMember.id)
        return { ...crewMember, name: newName, role: newRole };
      return crewMember;
    });
    setCrewMembers(updatedCrewMembers);
  }
  //adding crew members function
  function addCrewMember(name, role, img){
    const newCrewMember = {
      id: uuidv4(),
      name: name,
      role: role, 
      img: img,
    };
    console.log([...crewMembers]);
    setCrewMembers([...crewMembers, newCrewMember]);
  }
  //deleting crew members function
  function deleteCrewMember(id){
    crewMembers.forEach((crewMember) => {
      if(id === crewMember.id){
        crewMembers.splice(crewMembers.indexOf(crewMember), 1);
        setCrewMembers([...crewMembers]);
      }
    });
    console.log("Hello From Delete Func");
  }
  return (
    <div className="app flex flex-col">
      <div className="flex flex-wrap justify-center">
        {crewMembers.map((member, arr) => {
          return (
            <Crew
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              img={member.img}
              updateCrewMember={updateCrewMember}
              deleteCrewMember={deleteCrewMember}
            />
          );
        })}
      </div>
      <div className="flex justify-content-center">
      <AddCrewMember addCrewMember = {addCrewMember}/>
      </div>
    </div>
  );
}

export default App;
