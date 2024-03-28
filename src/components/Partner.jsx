/* eslint-disable react-refresh/only-export-components */
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


export const associate = []

const Partner = () => {
    const navigate = useNavigate();
    const associate = useSelector((state) => state.partner.associate);
    console.log(associate)

  return (
    <div  className="p-[24px] flex flex-wrap gap-[48px]">
        {associate.map((o, i) => (
        <div
          key={i}
          onClick={() => navigate(`/partner/preview-company/${o.name}`)}
          className=" rounded border-solid bg-[#eaeaea] h-[100px] px-[48px] py-[24px] cursor-pointer w-[300px]"
          >
            <p>{o.name}</p>
          </div>
           ))}
    </div>
  )
}

export default Partner;