import { useState } from "react";
import {ShoppingCart} from "lucide-react"
import Overlay from "../common/Overlay";
import CartView from "../../modal/CartView";

function Navbar(){
    const [openCartModal, setOpenCartModal] = useState(false);
    return(
        <div className="w-full bg-white flex justify-between items-center fixed top-0 z-10 py-4 px-8 border-b border-b-slate-200">
            <h2 className="font-semibold text-2xl">STORE</h2>
            <div className="flex gap-4">
                <p>shop</p>
                <p>Categories</p>
            </div>
            <button 
                onClick={() => setOpenCartModal(true)}
                className="relative p-2 hover:bg-gray-200 rounded transition-colors duration-300">
                <ShoppingCart className="w-6 h-6" />
                <div className=" flex justify-center items-center p-2 absolute top-0 right-0 w-4.5 h-4.5 rounded-full bg-blue-500">
                    <span className="text-white text-xs">1</span>
                </div>
            </button>
            {openCartModal && (<>
                <Overlay 
                        onClose={() => setOpenCartModal(false)}
                    />
                    <CartView 
                        onClose={() => setOpenCartModal(false)}
                    />
                
                </>
            )}
            
        </div>
    )
}

export default Navbar;