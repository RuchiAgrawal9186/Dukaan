import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="leftcontainer">
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <img src="./images/image.png" alt="" style={{ width: "100%" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>Nishyan</div>
            <div>Visit store</div>
          </div>

          <div>
            <img
              src="./images/Chevron Down.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="icons">
          <div className="iconscontainer">
            <img src="./images/Navbar Icon.png" alt="" />
            <p>Home</p>
          </div>

          <div className="iconscontainer">
            <img src="./images/Navbar Icon1.png" alt="" />
            <p>Orders</p>
          </div>

          <div className="iconscontainer">
            <img src="./images/Navbar Icon2.png" alt="" />
            <p>Products</p>
          </div>

          <div className="iconscontainer">
            <img src="./images/Navbar Icon3.png" alt="" />
            <p>Delivery</p>
          </div>

          <div className="iconscontainer">
            <img src="./images/Navbar Icon4.png" alt="" />
            <p>Marketing</p>
          </div>

          <div className="iconscontainer">
            <img src="./images/Navbar Icon5.png" alt="" />
            <p>Analytics</p>
          </div>

          <div className="iconscontainer">
            <img src="./images/Navbar Icon6.png" alt="" />
            <p>Payouts</p>
          </div>

          <div className="iconscontainer">
            <img src="./images/Navbar Icon7.png" alt="" />
            <p>Discounts</p>
          </div>
          <div className="iconscontainer">
            <img src="./images/Navbar Icon8.png" alt="" />
            <p>Audience</p>
          </div>
          <div className="iconscontainer">
            <div>
              <img src="./images/Navbar Icon9.png" alt="" />
            </div>
            <div>
              {" "}
              <p>Appearance</p>
            </div>
          </div>

          <div className="iconscontainer">
            <div>
              <img src="./images/Navbar Icon10.png" alt="" />
            </div>
            <div>
              <p>Plugins</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }} className="btmnav">
          <div>
            <img src="./images/wallet.svg" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>Available credits</div>
            <div>222.10</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
