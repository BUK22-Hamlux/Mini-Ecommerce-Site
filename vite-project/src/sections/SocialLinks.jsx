const shopLInks = [
    {name: "All products", link: "#"},
    {name: "Fashion", link: "#"},
    {name: "Electronics", link: "#"},
    {name: "Home & Garden", link: "#"}
]

const supportLInks = [
    {name: "Contact Us", link: "#"},
    {name: "Shipping Info", link: "#"},
    {name: "Returns", link: "#"},
    {name: "FAQ", link: "#"}
]

const companyLInks = [
    {name: "About us", link: "#"},
    {name: "Careers", link: "#"},
    {name: "Privacy Policy", link: "#"},
    {name: "Terms of service", link: "#"}
]

function SocialLinks(){
    return(
        <div className="flex flex-col gap-8 sm:flex-row justify-between p-8 border-b border-b-gray-200 mb-4">
            <div>
                <h3 className="mb-4">STORE</h3>
                <p className="text-sm text-gray-600">Your one-stop shop for modern, quality products.</p>
            </div>

            <div>
                <h3 className="mb-4 ">Shop</h3>
                <div className="flex flex-col gap-1">
                    {shopLInks.map((shop) => (
                        <a
                            href={shop.link}
                            className="text-sm text-gray-600 hover:text-blue-500"
                        >{shop.name}</a>
                    ))}
                </div> 
            </div>

            <div>
                <h3 className="mb-4">Support</h3>
                <div className="flex flex-col gap-1">
                    {supportLInks.map((support) => (
                        <a
                            href={support.link}
                            className="text-sm text-gray-600 hover:text-blue-500"
                        >{support.name}</a>
                    ))}
                </div> 
            </div>

            <div>
                <h3 className="mb-4">Company</h3>
                <div className="flex flex-col gap-1">
                    {companyLInks.map((company) => (
                        <a
                            href={company.link}
                            className="text-sm text-gray-600 hover:text-blue-500"
                        >{company.name}</a>
                    ))}
                </div> 
            </div>
        </div>
    )

    
}

export default SocialLinks