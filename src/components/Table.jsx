import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllInfo } from "../../store/TableActions"

export default function Table() {

    const dispatch = useDispatch()

    const products = useSelector((state) => state.products.list)

    const [successmsg, setSuccessmsg] = useSelector((state) => state.products.successmsg)



    useEffect(() => {
        dispatch(getAllInfo())
    }, [])

    console.log(products)

    return (
        <>
            <h1 className="container">Products List : </h1>
            <div className="container">
                <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                    <table className="table table-striped table-hover align-middle mb-0">
                        <thead className="table-dark text-uppercase fs-7">
                            <tr>
                                <th scope="col" className="ps-4 py-3">#</th>
                                <th scope="col" className="py-3">Title</th>
                                <th scope="col" className="py-3">Description</th>
                                <th scope="col" className="py-3">Category</th>
                                <th scope="col" className="py-3">Price</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {
                                products.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center py-5 text-muted">
                                            <i className="bi bi-people fs-2 m-2 text-secondary"></i>
                                            No Products found
                                        </td>
                                    </tr>
                                ) : (
                                    products.map((p, index) => (
                                        <tr key={index}>
                                            <td className="fw-medium text-dark text-center">{p.id}</td>
                                            <td className="fw-medium text-dark">{p.title}</td>
                                            <td className="text-muted">{p.description}</td>
                                            <td className="text-muted">{p.category}</td>
                                            <td>
                                                <span className="badge bg-light text-dark border">
                                                    $ {p.price}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="successToast" className="toast align-items-center text-bg-success border-0 position-fixed top-0 start-50 translate-middle-x" role="alert">
                    <div className="d-flex">
                        <div className="toast-body">
                            {successmsg}
                        </div>
                        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                    </div>
                </div>
        </>
    )
}