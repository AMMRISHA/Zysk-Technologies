import NewButton from "./NewButton";

function DesDetails({ footname }) {
  return (
    <>
     
        {footname.map((name, index) => (
          <li key={index}>{name}
          
          {name === "Solutions" && <NewButton />}
          </li>
        ))}
    
    </>
  );
}

export default DesDetails;