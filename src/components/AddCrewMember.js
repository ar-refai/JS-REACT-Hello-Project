import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function AddCrewMember(props) {
// use this use state to change the props in the parent component
const [show, setShow] = useState(false);
let [name, setName] = useState('');
let [role, setRole] = useState('');
let [img, setImg] = useState('');


const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<>

    <button onClick={handleShow} className="m-1 px-6 py-2 bg-purple-600 text-lg text-white-600 font-semibold rounded-full border border-solid border-2 border-purple-900 hover:text-purple-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        + Add a Pirate
    </button>
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    >
    <Modal.Header closeButton>
        <Modal.Title>
        <span className="text-black">
            Add Pirate Crew Member
        </span>
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form 
        id = "addModal" 
        onSubmit={(e) => {
            handleClose();
            e.preventDefault();
            // console.log("hello from addModal");
            // console.log(props.id,name,role);
            props.addCrewMember(name,role,img);
            setName('');
            setRole('');
            setImg('');
        }} 
        className="bg-white rounded px-8 pt-6 pb-4 mb-2">

        <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="member-name">
            Name:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="member-name" type="text" defaultValue={name} onChange={(e) => {setName(e.target.value)}} placeholder="John Smith" />
        </div>
        <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="member-role">
            Role:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="member-role" type="text" defaultValue={role} onChange={(e) => {setRole(e.target.value)}} placeholder="Sailor" />
        </div>
        <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="member-image">
            Image URL:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="member-image" type="text" defaultValue={img} onChange={(e) => {setImg(e.target.value)}} placeholder="https://www.google.com/" />
        </div>
    </form>
    </Modal.Body>
    <Modal.Footer>
        <button onClick={handleClose} className="px-4 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Close
        </button>
        <button form = "addModal" className="px-4 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Add Pirate
        </button>
    </Modal.Footer>
    </Modal>
</>
);
}
export default AddCrewMember;
