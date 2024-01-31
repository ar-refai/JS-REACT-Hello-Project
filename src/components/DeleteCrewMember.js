import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function DeleteCrewMember(props) {
// use this use state to change the props in the parent component
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<>
    <button onClick={handleShow} className="px-4 py-1 text-lg text-red-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Fire Me
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
            Delete Crew Member
        </span>
        </Modal.Title>
    </Modal.Header>
    <Modal.Footer>

        <form 
            id = "addModal" 
            onSubmit={(e) => {
                handleClose();
                e.preventDefault();
                // console.log("hello from addModal");
                // console.log(props.id,name,role);
                props.DeleteCrewMember(props.id);
            }} 
            className="rounded px-8 pt-6 pb-4 mb-2">
        </form>

        <button onClick={handleClose} className="px-4 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Close
        </button>

        <button form = "addModal" className="px-4 py-1 text-lg text-red-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Fire Pirate!
        </button>
    </Modal.Footer>
    </Modal>
</>
);
}
export default DeleteCrewMember;
