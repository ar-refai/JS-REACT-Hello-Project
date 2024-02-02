import { useState } from "react";
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
    <button type="button" onClick={handleShow} className="text-purple-900 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-md px-5 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Update</button>

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
        id = "edit-modal" 
        onSubmit={(e) => {
            handleClose();
            e.preventDefault();
            console.log("hello from editModal");
            console.log(props.id,name,role);
            props.updateCrewMember(props.id,name,role);
        }} 
        className="bg-white rounded px-8 py-2">

        <div className="">
                    <label htmlFor="create-pirate-name" className="block mb-2 text-md font-medium  text-purple-700">Pirate Name :</label>
                    <input type="text" id="create-pirate-name" className="bg-white border border-purple-600 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jack Sparrow" 
                    defaultValue={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    />
                </div>
                <div className="">
                    <label 
                    htmlFor="create-pirate-role" 
                    className="block mb-2 text-md font-medium text-purple-700">Pirate Role :</label>
                    <input 
                    type="text" 
                    id="create-pirate-role" 
                    className="bg-white border border-gray-600 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Ship's Captin" 
                    defaultValue={role}
                    onChange={(e) => {
                        setRole(e.target.value)
                    }}
                    />
                </div>
    </form>
    </Modal.Body>
    <Modal.Footer>
        <button type="button" onClick={handleClose} className="text-purple-900 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Close</button>

        <button form="edit-modal" type="submit" className="text-white-900 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Update</button>
    </Modal.Footer>
    </Modal>
</>
);
}
export default EditCrewMember;
