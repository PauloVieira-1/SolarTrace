import Hand from "../assets/hand-index-thumb (1).svg"
import Arrow from "../assets/arrow-right.svg"

const mapContent = [
    {
        "Index": 0,
        "Content": 
        <>
            <div
                style={{
                    position: "absolute",
                    top: "50px",
                    left: "50px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    fontSize: "18px",
                    zIndex: 1000,
                    maxWidth: "300px"
                }}
            >
                <div>
                    <h3 className="mb-4">Scroll Down</h3>
                    <div className="text-center d-flex justify-content-center mb-4">
                        <img src={Hand} className="img-fluid" style={{ width: "50px", height: "50px" }} />
                    </div>
                    <p>Follow and observe our production process</p>
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "50px",
                    right: "50px",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    fontSize: "18px",
                    zIndex: 1000,
                    maxWidth: "300px"
                }}
            >
                <div>
                    <img src={Arrow} className="img-fluid" style={{ width: "100px", height: "100px", animation: "bounce 2s infinite alternate" }} />
                    <style>
                        {`
                            @keyframes bounce {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(20px); }
                            }
                        `}
                    </style>
                </div>
            </div>
        </>
    },
    {
        "Index": 1,
        "Content": <></>
    },
    {
        "Index": 2,
        "Content": <></>
    },
    {
        "Index": 3,
        "Content": <></>
    }
]

export default mapContent