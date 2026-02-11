function Overlay({ onClose }){
    return(
        <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose}>
        </div>
    )
}

export default Overlay;