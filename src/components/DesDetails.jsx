function DesDetails({ footname }) {
  return (
    <>
     
        {footname.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
    
    </>
  );
}

export default DesDetails;