import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../store/UserListActions";

export default function Userlist(){

    const dispatch = useDispatch()

    const users = useSelector((state) => state.user.list)

    const successmsg = useSelector((state) => state.user.successmsg)

    const errmsg = useSelector((state) => state.user.errmsg)

    useEffect(() => {
        dispatch(getAllData())
        console.log(users)
    }, [dispatch])

    console.log(users)
    console.log(successmsg)
    console.log(errmsg)

}