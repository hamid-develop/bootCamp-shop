import React, {useEffect, useState} from "react"
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import CartBtn from "../CartBtn/CartBtn";
import Nav from "../Nav/Nav";
import useAxios from "../../hooks/useAxios";
import {fetchCarousel} from "../../redux/carousel/carousel-actions";
import {useDispatch} from "react-redux";

const Header = () => {
    const dispatch = useDispatch()

    // useAxios("menu", '', null,fetchMenu)

    // const [nav,setNav] = useState([])
    // useEffect(()=>{
    //     axios.get("http://localhost:4000/menu")
    //         .then(
    //             (res) => setNav(res.data)
    //         )
    //
    //
    // },[])


    return (
        // !data ?
        //     <div className={`d-flex flex-wrap flex-row-reverse justify-content-between align-items-center py-3 `}>
        //         <div className={`col-lg-1 px-0`}>
        //             <Logo/>
        //         </div>
        //         <div className={`col-lg-4 col-xxl-3`}>
        //             <Search/>
        //         </div>
        //         <div className={`col-lg-1 px-0`}>
        //             <CartBtn width={"30px"} height={"30px"}/>
        //         </div>
        //         <Nav data={data}/>
        //     </div>
        //     :
            <h1 className={`text-center col-12`}>Loading</h1>

    )

}

export default Header
