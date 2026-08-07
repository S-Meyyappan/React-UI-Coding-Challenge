import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/UserListActions";
import { useNavigate } from "react-router";

export default function AddUser() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: ""
    })

    const [missing, setMissing] = useState(false)

    const handleChange = ($event) => {
        const { name, value } = $event.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = ($event) => {
        $event.preventDefault()
        if (formData.name === "" || formData.phone === "" || formData.email === "" || formData.company === "") {
            setMissing(true)
            return
        }
        dispatch(addUser(formData))
        navigate('/user-list')
    }   

    return (
        <>
            <h1 className="ms-4 my-3">Add User</h1>

            {missing && (
                <div className="alert alert-warning p-2 small mb-3 w-50">
                    Please fill all fields
                </div>
            )}


            <div className="container">
                <div className="card bg-light w-50 rounded-3 border-0 shadow-sm p-4">
                    <form onSubmit={handleSubmit}>


                        <div className="row align-items-center mb-3">
                            <div className="col-2">
                                <label className="col-form-label fw-medium">Name :</label>
                            </div>
                            <div className="col-10">
                                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                            </div>
                        </div>


                        <div className="row align-items-center mb-3">
                            <div className="col-2">
                                <label className="col-form-label fw-medium">Phone :</label>
                            </div>
                            <div className="col-10">
                                <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                            </div>
                        </div>


                        <div className="row align-items-center mb-3">
                            <div className="col-2">
                                <label className="col-form-label fw-medium">Email :</label>
                            </div>
                            <div className="col-10">
                                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="row align-items-center mb-4">
                            <div className="col-2">
                                <label className="col-form-label fw-medium">Company :</label>
                            </div>
                            <div className="col-10">
                                <input type="text" name="company" className="form-control" value={formData.company} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary rounded-2 px-4">
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}