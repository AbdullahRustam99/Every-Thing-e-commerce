import React from "react";
import men1 from "@/img/men (1).png";
import men2 from "@/img/men (2).png";
import women1 from "@/img/women (3).png";
import women2 from "@/img/women (4).png";
import Card from "@/components/Card";

const GearUp = () => {
  return (
    <>
      <div className="px-10 flex flex-col gap-2 mt-20 max-w-[1440px]">
        <h2 className="text-[22px] font-medium mb-6">Gear Up</h2>

        <div className="flex flex-wrap gap-8 justify-between">
          <div className="flex flex-wrap gap-5 justify-between w-full lg:w-[48%]">
             <Card
                productimageUrl={men1}
                productName={"Nike Air Max Pulse"}
                productCategory={"Men's Shoes"}
                productinventory={NaN}
                productprice={1300}
                productcolors={[]}
                productid=""
              />
             <Card
                productimageUrl={men2}
                productName={"Nike Air Max Pulse"}
                productCategory={"Men's Shoes"}
                productinventory={NaN}
                productprice={1300}
                productcolors={[]}
                productid=""
              />
          </div>
          <div className="flex flex-wrap gap-5 justify-between w-full lg:w-[48%]">
             <Card
                productimageUrl={women1}
                productName={"Nike Air Max Pulse"}
                productCategory={"Men's Shoes"}
                productinventory={NaN}
                productprice={1300}
                productcolors={[]}
                productid=""
              />
             <Card
                productimageUrl={women2}
                productName={"Nike Air Max Pulse"}
                productCategory={"Men's Shoes"}
                productinventory={NaN}
                productprice={1300}
                productcolors={[]}
                productid=""
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default GearUp;
