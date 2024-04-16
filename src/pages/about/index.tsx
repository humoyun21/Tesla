import Container from "../../components/containers/container";
import UncontrolledExample from "../../components/coruselComp/corusel";
import "./style.scss";
// import redTesla from "../../assets/images/redTesla.png";
import red2 from "../../assets/images/models.png"
import model3 from "../../assets/images/model3.png"

const index = () => {
  return (
    <div className="bg-black h-[76vh]">
      <Container>
        <img src={model3} className="textBack" alt="" />
        <UncontrolledExample   imagesTesla={red2}  />
      </Container>
    </div>
  );
};

export default index;
