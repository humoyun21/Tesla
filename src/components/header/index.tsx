import { NavLink } from "react-router-dom";
import { Container } from "@containers";
import logo from "@images/Logo.png";
import search from "../../assets/images/Vector.svg";
import group from "../../assets/images/Group7.svg";
import group9 from "../../assets/images/Group9.svg"
import "./style.scss";

const index = () => {

  return (
    <header className="bg-transparent">
      <Container>
        <nav className="flex  items-center h-[100px] gap-4">
          <NavLink to="/">
            <img src={logo} alt="logo" className="mr-[150px]" />
          </NavLink>
          <ul className="flex gap-x-8">
            <ul className="flex items-center gap-[13px]">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeHome text-white font-medium text-[16px] py-[4px] px-[16px]"
                      : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                  }
                  to={"/"}
                >
                  Model S
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeModel3 text-white font-medium text-[16px] py-[4px] px-[16px]"
                      : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                  }
                  to={"/model-3"}
                >
                  Model 3
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeModelx text-white font-medium text-[16px] py-[4px] px-[16px]"
                      : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                  }
                  to={"/model-x"}
                >
                  Model X
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeModely text-white font-medium text-[16px] py-[4px] px-[16px]"
                      : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                  }
                  to={"/model-y"}
                >
                  Model Y
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                  isActive
                    ? "activeModely text-white font-medium text-[16px] py-[4px] px-[16px]"
                    : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                }
                  to={"/solar-roof"}
                >
                  Solar Roof
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                  isActive
                    ? "activeModely text-white font-medium text-[16px] py-[4px] px-[16px]"
                    : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                }
                  to={"/solar-panels"}
                >
                  Solar Panels
                </NavLink>
              </ul>

          </ul>
          <div className="flex gap-x-8 pl-4">
            <div className="nav--search ">
              <img src={search} alt="search" />
              <p>Search</p>
            </div>

            <img src={group} alt="search" />
            <img src={group9} alt="search" />

          </div>
        </nav>
      </Container>
    </header>
  );
};

export default index;
