import {Home, About, ContactUs, Products, AddToCartList } from "../pages/Index";

export const routes=[
    {
        name:'Home',
        path:'/',
        element:<Home/>,
        showInNavBar:true
    },
    {
        name:'About',
        path:'/about',
        element:<About/>,
        showInNavBar:true
    },
    {
        name:'Products',
        path:'/products',
        element:<Products/>,
        showInNavBar:true
    },{
        name:'Contact',
        path:'/contact-us',
        element:<ContactUs/>,
        showInNavBar:true
    },
    {
        name:'Cart Details',
        path:'/items-cart',
        element:<AddToCartList/>,
        showInNavBar:false
    }
]