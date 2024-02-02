import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function AddCrewMember(props) {
// use this use state to change the props in the parent component
const [show, setShow] = useState(false);
let [name, setName] = useState("");
let [role, setRole] = useState("");
let [img, setImg] = useState("");

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<>
    <button
    type="button"
    onClick={handleShow}
    className="block mx-auto text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-md px-8 py-3 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
    + Add A Pirate
    </button>

    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    >
    <Modal.Header closeButton>
        <Modal.Title>
            <span className='text-black'>
                Add A New Pirate To The Crew
            </span>
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form
        id="addModal"
        className="max-w-sm mx-auto"
        onSubmit={(e) => {
            e.preventDefault();
            handleClose();
            props.addCrewMember(name, role, img);
            setName('');
            setRole('');
            setImg('');
        }}
        >
        <div className="mb-2">
            <label
            htmlFor="create-pirate-name"
            className="block mb-2 text-md font-medium  text-purple-700"
            >
            Pirate Name :
            </label>
            <input
            type="text"
            id="create-pirate-name"
            className="bg-white border border-purple-600 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Jack Sparrow"
            defaultValue={name}
            onChange={(e) => {
                setName(e.target.value);
            }}
            />
        </div>
        <div className="mb-2">
            <label
            htmlFor="create-pirate-role"
            className="block mb-2 text-md font-medium text-purple-700"
            >
            Pirate Role :
            </label>
            <input
            type="text"
            id="create-pirate-role"
            className="bg-white border border-gray-600 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ship's Captin"
            defaultValue={role}
            onChange={(e) => {
                setRole(e.target.value);
            }}
            />
        </div>
        <div className="mb-2">
            <label
            htmlFor="create-pirate-image"
            className="block mb-2 text-md font-medium text-purple-700"
            >
            Pirate Image :
            </label>
            <input
            type="text"
            id="create-pirate-image"
            className="bg-white border border-gray-600 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https:\\www.google.com\"
            defaultValue={img}
            onChange={(e) => {
                setImg(e.target.value);
            }}
            />
        </div>
        </form>
    </Modal.Body>
    <Modal.Footer>
        <button
        type="button"
        onClick={handleClose}
        className="text-purple-900 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
        Close
        </button>

        <button
        form="addModal"
        type="submit"
        className="text-purple-900 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
        recruit
        </button>
    </Modal.Footer>
    </Modal>
</>
);
}
export default AddCrewMember;
