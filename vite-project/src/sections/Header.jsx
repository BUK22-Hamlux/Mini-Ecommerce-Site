import Button from "../components/common/Button"
import { useState } from "react";
const filter = [
    {name: "All"}, 
    {name: "Electronics"},
    {name: "Fashion"}, 
    {name: "Home & Garden"}, 
    {name: "Sports"}
];

function Header() {
    const [filterBy, setFilterBy] = useState("All")
    return(
        <header className="mt-25 text-center p-8">
            <h1 className="text-2xl font-semibold mb-4">
                Discover Our Collections
            </h1>
            <p className="text-slate-500">
                Shop the latest products from top brands. Quality guaranteed, fast shipping.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
                {filter.map((option) => (
                    <Button
                        onClick={() => setFilterBy(option.name)}
                        type="notPrimary"
                        text={option.name}
                        optionalClassName={`${filterBy === option.name? "bg-blue-500 text-white": "bg-gray-100 text-slate-600"}`}
                    />
                ))}
            </div>

        </header>
    )

}

export default Header;