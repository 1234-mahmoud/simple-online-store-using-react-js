import Navbar from "../components/Navbar";
import "../style/index.css";
import Slider from "./Slider";
import { branches } from "../data/branches";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <div className="container_branches">
        {branches.map((b) => (
          <div className="branch" key={b.id}>
              <Link to={b.link} className="link_branch">
              <div className="branch_child">
              <img src={b.img} alt="" />
              <h3 className="branch_name">{b.branch_name}</h3>
            </div>
              </Link>

          
            <div className="details">
              <p>{b.txt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
