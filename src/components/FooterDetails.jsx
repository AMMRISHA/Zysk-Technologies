import DesDetails from "./DesDetails";
import './style.css';
import NewButton from "./NewButton";
function FooterDetails({ FooterDetails }) {
  return (
    <>
    <div className="footerdes">
      {FooterDetails.map((details) => (
        <ul key={details.id}>
        <h6> {details.footColName}
        {details.footColName === "Solutions" && <NewButton />}

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
