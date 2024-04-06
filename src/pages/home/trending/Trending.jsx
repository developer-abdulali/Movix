// import React from "react";
// import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
// import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
// ContentWrapper;

// const Trending = () => {
//   const onTabChange = (tab) => {};

//   return (
//     <div className="carouselSection">
//       <ContentWrapper>
//         <span className="carouselTitle">Trending</span>
//         <SwitchTabs data={["Day, Week"]} onTabChange={onTabChange} />
//       </ContentWrapper>
//     </div>
//   );
// };

// export default Trending;



import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";

const Trending = () => {
  const onTabChange = (tab, index) => {
    console.log("Selected Tab:", tab, "Index:", index);
    // You can add your logic here for handling tab change
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        {/* Corrected data prop */}
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
    </div>
  );
};

export default Trending;
