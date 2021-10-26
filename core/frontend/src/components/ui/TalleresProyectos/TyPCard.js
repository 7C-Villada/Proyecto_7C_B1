import React from "react";
import logo from "../Navbar/Logo.png";
import { Card } from "../CampamentosSection/CampamentosSection";
import { Link } from "react-router-dom";

const TyPCard = (props) => {
  return (
    <>
      <div className="col py-2">
        <Link to="google.com" className="text-decoration-none">
          <Card
            bg={`https://res.cloudinary.com/aprenderhaciendo/${props.randomImage}`}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                {props.title}
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={logo}
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  ></img>
                </li>
                <li className="d-flex align-items-center">
                  <small>{props.date}</small>
                </li>
              </ul>
            </div>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default TyPCard;
