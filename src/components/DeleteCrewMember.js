import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function DeleteCrewMember(props) {
// use this use state to change the props in the parent component
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<>
    <button type="button" onClick={handleShow} className="text-red-700	 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-md px-5 py-2 text-center me-2 mb-2 dark:border-red-400 dark:text-red-400 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-900"> Drown </button>

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
    <Modal.Body>
            <>
            <div className="w-96 xl:h-54 px-10 py-8 my-8 max-w-sm mx-4 my-4 bg-white rounded-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img
                className="block mx-auto h-28 w-28 object-cover rounded-full sm:mx-0 sm:shrink-0"
                src= {props.img}
                alt=""
                />
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-2xl text-black font-semibold">
                            Name : {props.name}
                            </p>
                        <p className="text-slate-500 font-medium">
                            Role : {props.role}
                            </p>
                    </div>
                </div>
            </div>
            </>
        </Modal.Body>
    <Modal.Footer>

        <form 
            id = "delete-modal" 
            onSubmit={(e) => {
                handleClose();
                e.preventDefault();
                // console.log("hello from addModal");
                // console.log(props.id,name,role);
                props.DeleteCrewMember(props.id);
            }} 
            className="rounded px-8 pt-6 pb-4 mb-2">
        </form>

        <button type="button" onClick={handleClose} className="text-purple-900 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Close</button>

        <button form="delete-modal" type="submit" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-red-400 dark:text-red-400 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-900">Drown</button>
    </Modal.Footer>
    </Modal>
</>
);
}
export default DeleteCrewMember;
