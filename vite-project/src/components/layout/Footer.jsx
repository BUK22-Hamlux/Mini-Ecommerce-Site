function Footer(){
    let year = new Date().getFullYear();
    return(
        <p className="text-sm text-gray-600 text-center p-4 mb-4">
            &copy; {year} STORE. All right reserved.
        </p>
    )
}

export default Footer;