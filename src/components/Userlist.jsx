import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllData } from "../../store/UserListActions";
import { Toast } from "bootstrap/dist/js/bootstrap.bundle.min";

export default function Userlist() {

    const dispatch = useDispatch()

    const users = useSelector((state) => state.user.list)

    const successmsg = useSelector((state) => state.user.successmsg)

    const errmsg = useSelector((state) => state.user.errmsg)

    const [selectedUser, setSelectedUser] = useState(null)

    const clickDelete = (p) => {
        setSelectedUser(p)
        showToast("liveToast")
    }

    const handleConfirmDelete = (id) => {
        dispatch(deleteUser(id))
        const toastElement = document.getElementById("liveToast");
        if (toastElement) {
            const toastInstance = new Toast(toastElement)
            toastInstance.hide()
        }
    }

    const showToast = (element) => {
        const toastElement = document.getElementById(element);
        if (toastElement) {
            const toastInstance = new Toast(toastElement, { autoHide: false });
            toastInstance.show();
        }
    }

    useEffect(() => {
        dispatch(getAllData())
    }, [dispatch])

    console.log(users)

    return (
        <>
            {/*Table content */}
            <div className="container">
                <h2 className="fw-bold my-4">Users List</h2>
                <div className="card shadow-sm rounded-4 overflow-auto my-4">
                    <table className="table table-striped table-hover align-middle mb-0">
                        <thead className="table-dark text-uppercase fs-7">
                            <tr>
                                <th scope="col" className="ps-4 py-3">#</th>
                                <th scope="col" className="py-3">Name</th>
                                <th scope="col" className="py-3">Company</th>
                                <th scope="col" className="py-3">Email</th>
                                <th scope="col" className="py-3">Phone</th>
                                <th scope="col" className="text-end pe-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-5 text-muted">
                                        <i className="bi bi-people fs-2 m-2 text-secondary"></i>
                                        No Users found.
                                    </td>
                                </tr>
                            ) : (
                                users.map((p, index) => (
                                    <tr key={index}>
                                        <td className="fw-medium text-dark text-center">{p.id}</td>
                                        <td className="fw-medium text-dark">{p.name}</td>
                                        {/* Compatibility fix: Reads company.name if object, or defaults to plain company string */}
                                        <td className="text-muted">{p.company?.name || p.company || "N/A"}</td>
                                        <td className="text-muted">{p.email}</td>
                                        <td>
                                            <span className="badge bg-light text-dark border">
                                                {p.phone}
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <button
                                                className="btn btn-outline-danger border-0 rounded-circle"
                                                id="liveToastBtn"
                                                onClick={() => clickDelete(p)}>
                                                <i className="bi bi-trash fs-5"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>


            {/* Delete toast */}
            <div className="toast-container position-fixed top-0 start-50 translate-middle-x p-3" style={{ zIndex: 1055 }}>
                <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header bg-light">
                        <strong className="me-auto">Confirm deleting user {selectedUser?.name}</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        <p className="mb-2">This action can't be undone.</p>
                        <div className="d-flex gap-2 justify-content-end border-top pt-2">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
                            <button type="button" className="btn btn-danger btn-sm" onClick={() => handleConfirmDelete(selectedUser?.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}