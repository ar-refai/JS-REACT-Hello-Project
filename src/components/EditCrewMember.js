import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditCrewMember(props) {
// use this use state to change the props in the parent component
const [show, setShow] = useState(false);
let [name, setName] = useState(props.name);
let [role, setRole] = useState([props.role]);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<>

    <button onClick={handleShow} className="px-4 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Update
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
            Update Crew Member
        </span>
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form 
        id = "editModal" 
        onSubmit={(e) => {
            handleClose();
            e.preventDefault();
            console.log("hello from editModal");
            console.log(props.id,name,role);
            props.updateCrewMember(props.id,name,role);
        }} 
        className="bg-white rounded px-8 pt-6 pb-4 mb-2">

        <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="member-name">
            Name:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="member-name" type="text" defaultValue={name} onChange={(e) => {setName(e.target.value)}} placeholder="Member Name" />
        </div>
        <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="member-role">
            Role:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="member-role" type="text" defaultValue={role} onChange={(e) => {setRole(e.target.value)}} placeholder="Member Role" />
        </div>
    </form>
    </Modal.Body>
    <Modal.Footer>
        <button onClick={handleClose} className="px-4 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Close
        </button>
        <button form = "editModal" className="px-4 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Update
        </button>
    </Modal.Footer>
    </Modal>
</>
);
}
export default EditCrewMember;
