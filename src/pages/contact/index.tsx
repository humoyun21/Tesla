import Container from "../../components/containers/container";
import whiteTesla from "../../assets/images/black.png";
import UncontrolledExample from "../../components/coruselComp/corusel";
import modelY from "../../assets/images/modely.png";
import "./style.scss";

const index = () => {
  return (
    <div className="bg-black contactClass">
      <Container>
        <img src={modelY} className="textBack" alt="" />
        <UncontrolledExample imagesTesla={whiteTesla} />
      </Container>
    </div>
  );
};

export default index;