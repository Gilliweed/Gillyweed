import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const ContactC = () => {
  return (
    <div>
      <div className="grid grid-cols-6 divide-x p-7">
        <div className="col-start-1 col-end-3 text-center">
          <SupportAgentIcon style={{ fontSize: "60px", color: "grey" }} />
          <h2 className="text-3xl font-light">Support</h2>
          <p className="pt-3 pb-1 font-light">
            Get help with all Gillyweed products
          </p>
          <p className="pt-1 pb-1 font-light ml-8">
            Get answers from the Gillyweed Forums community
          </p>
          <p className="pt-1 pb-1 font-light ml-8">
            Find support options for enterprise and business
          </p>
          <div>
          <EmailIcon className="text-gray-500"/>
          <LocalPhoneIcon className="text-gray-500 ml-4"/>
          </div>
        </div>
        <div className="col-start-4 col-end-6 text-center">
          <PointOfSaleIcon
            style={{ fontSize: "60px", color: "grey", marginLeft: "95px" }}
          />
          <h2 className="ml-24 text-3xl font-light">Sales</h2>
          <div className="ml-16">
            <p className="pt-3 pb-1 font-light">
              Get help with all Gillyweed products
            </p>
            <p className="pt-1 pb-1 font-light ml-8">
              Get answers from the Gillyweed Forums community
            </p>
            <p className="pt-1 pb-1 font-light ml-8">
              Find support options for enterprise and business
            </p>
          </div>
        </div>
      </div>
      <div className="p-10  bg-gray-100">
        <h2 className="text-2xl  text-center"> Security</h2>
        <p className="font-light text-center pt-2">
          Get help with all Gillyweed products
        </p>
        <p className="font-light ml-8 text-center pt-2">
          Get answers from the Gillyweed Forums community
        </p>
      </div>
    </div>
  );
};

export default ContactC;
