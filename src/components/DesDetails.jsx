import NewButton from "./NewButton";

function DesDetails({ footname }) {
  return (
    <>
     
        {footname.map((name, index) => (
          <li key={index}>{name}
          
          {details.footColName === "Solutions" && <NewButton />}
          </li>
        ))}
    
    </>
  );
}

export default DesDetails;