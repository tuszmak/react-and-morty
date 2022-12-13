import { useParams } from "react-router-dom";

const Location = () => {
  const { id } = useParams()
  return (<div>Prop: {id}</div>);
}

export default Location;
