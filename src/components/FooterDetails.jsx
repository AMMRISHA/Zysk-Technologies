import DesDetails from "./DesDetails";
import './style.css';

function FooterDetails({ FooterDetails }) {
  return (
    <>
    <div className="footerdes">
      {FooterDetails.map((details) => (
        <ul key={details.id}>
        <h6> {details.footColName}
       

       </h6>
        
        <li>
          <DesDetails footname={details.footColVar}></DesDetails>
        </li>
        </ul>
      ))}
      </div>
    </>
  );
}

export default FooterDetails;
