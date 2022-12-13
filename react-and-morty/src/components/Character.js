import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>id:{id}</h1>
    </div>
  );
}

export default Character;
