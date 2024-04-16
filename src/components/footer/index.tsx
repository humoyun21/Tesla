import { Container } from "@containers";
import group3 from "../../assets/images/Group15.svg"
import "./style.scss";


const index = () => {
    return (
        <footer className="bg-transparent text-white ">
            <Container >

                <div className=" footer_nav">
                    <div className="">
                        <ul className="flex gap-[100px]"> 
                            <li >
                                <h2 className="ml-2">396 mi</h2>
                                <span>Range (EPA est.)</span >
                            </li>
                            <li>
                                <h2 className="ml-2">1.99s</h2>
                                <span>0-60 mph*</span>
                            </li>
                            <li>
                                <h2 className="ml-2">200mph</h2>
                                <span>Top Speed†</span>
                            </li>
                            <li>
                                <h2 className="ml-2">1,020hp</h2>
                                <span>Peak Power</span>
                            </li>
                        </ul>
                    </div>
                    <button className="footer-btn">
                        <p>Order Now</p>
                        <img src={group3} alt="search" />
                    </button>

                </div>

            </Container>
        </footer>
    );
};

export default index;