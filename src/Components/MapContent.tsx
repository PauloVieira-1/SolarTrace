import Hand from "../assets/hand-index-thumb (1).svg";
import Arrow from "../assets/arrow-right.svg";

const overlayStyle : React.CSSProperties = {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "18px",
    zIndex: 1000,
    maxWidth: "300px"
};

const mapContent = [
    {
        "Index": 0,
        "Content": 
        <>
            <div
                style={{
                    position: "absolute",
                    top: "30px",
                    left: "30px",
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
                    top: "30px",
                    right: "30px",
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
        "Content": 
        <>
            <div style={{ ...overlayStyle, top: "30px", left: "30px" }}>
                <h3>Raw Material Extraction</h3>
                <p><strong>Location:</strong> Qinghai Province, China</p>
                <p>Polysilicon is produced using hydrochloration, distillation, and CVD processes.</p>
                <p>85% of the electricity used comes from renewable sources.</p>
            </div>
        </>
    },
    {
        "Index": 2,
        "Content": 
        <>
            <div style={{ ...overlayStyle, bottom: "30px", right: "30px" }}>
                <h3>Ingot Manufacturing</h3>
                <p><strong>Location:</strong> Baotou, Inner Mongolia, China</p>
                <p>Polysilicon is melted and crystallized into monocrystalline ingots using the Czochralski method.</p>
                <p>The facility’s ESG certification (SA8000) is in progress.</p>
            </div>
        </>
    },
    {
        "Index": 3,
        "Content": 
        <>
            <div style={{ ...overlayStyle, top: "30px", left: "30px" }}>
                <h3>Wafer Slicing</h3>
                <p><strong>Location:</strong> Jiangsu Province, China</p>
                <p>Silicon ingots are cut into wafers using diamond wire slicing technology.</p>
                <p>Traceability is maintained using unique serial numbers.</p>
            </div>
        </>
    },
    {
        "Index": 4,
        "Content": 
        <>
            <div style={{ ...overlayStyle, bottom: "30px", right: "30px" }}>
                <h3>Solar Cell Production</h3>
                <p><strong>Location:</strong> Jiangsu and Sichuan Province, China</p>
                <p>Silicon wafers are transformed into high-efficiency TOPCon photovoltaic cells.</p>
                <p>Full traceability is ensured through internal serial tracking.</p>
            </div>
        </>
    },
    {
        "Index": 5,
        "Content": 
        <>
            <div style={{ ...overlayStyle, top: "30px", left: "30px" }}>
                <h3>Module Assembly</h3>
                <p><strong>Location:</strong> Jiangsu and Sichuan, China</p>
                <p>Solar cells are laminated between glass sheets, framed, and wired.</p>
                <p>Manufacturing includes an internal recycling rate of 45%.</p>
            </div>
        </>
    },
    {
        "Index": 6,
        "Content": 
        <>
            <div style={{ ...overlayStyle, bottom: "30px", right: "30px" }}>
                <h3>Transport to Europe</h3>
                <p><strong>Route:</strong> China → France → Netherlands</p>
                <p>Solar panels are shipped via sea and then transported by truck.</p>
                <p>Emissions breakdown: 0.775 kg CO₂-eq (shipping), 0.148 kg CO₂-eq (trucking).</p>
            </div>
        </>
    },
    {
        "Index": 7,
        "Content": 
        <>
            <div style={{ ...overlayStyle, top: "30px", left: "30px" }}>
                <h3>Final Product in the Netherlands</h3>
                <p>Solar panels are installed with a 30-year service life.</p>
                <p>Each panel is traceable from polysilicon origin using serial codes and QR integration.</p>
                <p>Total carbon footprint: ~0.486 kg CO₂-eq per watt peak.</p>
            </div>
        </>
    }
];


export default mapContent;
