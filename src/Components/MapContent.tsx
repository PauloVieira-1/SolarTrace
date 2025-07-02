import Hand from "../assets/hand-index-thumb (1).svg";
import Arrow from "../assets/arrow-right.svg";
import Panel from "../assets/Panel.png";
import IngotManufacturing from "../assets/ingot.png";
import Slicing from "../assets/waterSlicing.png";
import Cell from "../assets/cell_prod.jpeg";

const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: "30px",
    left: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "18px",
    zIndex: 1000,
    maxWidth: "300px"
};

const mapContent = [
    {
        Index: 0,
        Content: 
        <>
            <div style={{ ...overlayStyle, textAlign: "center"}}>
                <h3>Scroll Down or Use Arrows</h3>
                <div className="text-center d-flex justify-content-center mb-4 p-4">
                    <img src={Hand} className="img-fluid" style={{ width: "50px", height: "50px" }} />
                </div>
                <p className="fs-5">Follow and observe our production process</p>
                <p className="fw-bold fs-6">* Points do not represent precise locations</p>
            </div>
            <div style={{ position: "absolute", bottom: "30px", right: "30px" }}>
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
        </>
    },
    {
        Index: 1,
        Content: 
        <>
            <div style={{ ...overlayStyle }}>
                <h3>Raw Material Extraction</h3>
                <p><strong>Location:</strong> Qinghai Province, China</p>
                <p>Polysilicon is produced using hydrochloration, distillation, and CVD processes.</p>
                <p>85% of the electricity used comes from renewable sources.</p>
                <p className="mt-3"><strong>Source:</strong> Product Traceability Report<br /><strong>Date:</strong> 2025-06-05</p>
            </div>
        </>
    },
    {
        Index: 2,
        Content: 
        <>
            <div style={{ ...overlayStyle }}>
                <h3>Ingot Manufacturing</h3>
                <p><strong>Location:</strong> Baotou, Inner Mongolia, China</p>
                <p>Polysilicon is melted and crystallized into monocrystalline ingots using the Czochralski method.</p>
                <img src={IngotManufacturing} alt="Ingot Manufacturing" className="img-fluid my-4" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                <p className="mt-3"><strong>Source:</strong> Supply Chain Traceability Management Audit<br /><strong>Date:</strong> 2025-03-16</p>
            </div>
        </>
    },
    {
        Index: 3,
        Content: 
        <>
            <div style={{ ...overlayStyle }}>
                <h3>Wafer Slicing</h3>
                <p><strong>Location:</strong> Jiangsu Province, China</p>
                <p>Silicon ingots are cut into wafers using diamond wire slicing technology.</p>
                <p>Traceability is maintained using unique serial numbers.</p>
                <img src={Slicing} alt="Wafer Slicing" className="img-fluid my-4" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                <p className="mt-3"><strong>Source:</strong> STS Supply Chain Traceability Management System Audit<br /><strong>Date:</strong> 2024-07-26</p>
            </div>
        </>
    },
    {
        Index: 4,
        Content: 
        <>
            <div style={{ ...overlayStyle }}>
                <h3>Solar Cell Production</h3>
                <p><strong>Location:</strong> Jiangsu and Sichuan Province, China</p>
                <p>Silicon wafers are transformed into high-efficiency TOPCon photovoltaic cells.</p>
                <p>Full traceability is ensured through internal serial tracking.</p>
                <img src={Cell} alt="Cell Production" className="img-fluid my-4" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                <p className="mt-3"><strong>Source:</strong> SMETA Sedex Members Ethical Trade Audit<br /><strong>Date:</strong> 2024-06-04</p>
            </div>
        </>
    },
    {
        Index: 5,
        Content: 
        <>
            <div style={{ ...overlayStyle }}>
                <h3>Module Assembly</h3>
                <p><strong>Location:</strong> Jiangsu and Sichuan, China</p>
                <p>Solar cells are laminated between glass sheets, framed, and wired. Manufacturing includes an internal recycling rate of 45%.</p>
                                <img src={Panel} alt="Module Assembly" className="img-fluid my-4" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                <p className="mt-3"><strong>Source:</strong> STS Supply Chain Traceability Management System Audit<br /><strong>Date:</strong> 2024-07-28</p>
            </div>
        </>
    },
    {
        Index: 6,
        Content: 
        <>
            <div style={{ ...overlayStyle }}>
                <h3>Intercontinental Transport</h3>
                <p><strong>Route:</strong> China → Rotterdam → Tiel, Netherlands</p>
                <p>Panels are shipped by sea to Rotterdam and then trucked to their final destinations.</p>
                <p>Emissions per m²: 0.775 kg CO₂-eq (shipping), 0.148 kg CO₂-eq (trucking).</p>
            </div>
        </>
    },
    {
        Index: 7,
        Content: 
        <>
            <div style={{ ...overlayStyle }}>
                <h3>End-of-Life Recycling</h3>
                <p><strong>Location:</strong> Netherlands</p>
                <p>Solarwatt collaborates with ZRN and Stichting OPEN to manage solar panel collection and recycling.</p>
                <p>This contributes to a circular economy and improves the environmental impact of solar energy systems.</p>
            </div>
        </>
    }
];

export default mapContent;
