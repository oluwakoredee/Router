import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"

const PreviewCompany = ()=>{
    const { companyId } = useParams();
    const navigate = useNavigate();

    const associate = useSelector((state) => state.partner.associate);
    const companyAssociate = associate.find((associate) =>associate.name === companyId);
    console.log(companyId)

    if (!companyAssociate) {
        
        return(
            <div>
                <h4 className="px-3"> No company found</h4> 
            
                <button className="p-1 ml-2 border-solid bg-slate-500 rounded-md" onClick={() => navigate(-1)}>Go back to store</button>
            </div>
        );
    }

    return(
        <div className="p-3">
            <h3>{companyAssociate.name}</h3>
            <p>Description: {companyAssociate.description}</p>
            <button className="p-1 ml-2 border-solid bg-slate-500 rounded-md"  onClick={() => navigate(-1)}>Go back to store</button>
        </div>

    );
};

export default PreviewCompany;