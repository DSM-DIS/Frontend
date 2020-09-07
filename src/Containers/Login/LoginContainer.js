import React, { Fragment } from "react";

import HeaderContainer from "./Header/HeaderContainer";
import RegisterContainer from "./Register/RegisterContainer";
import AcceptanceContainer from "./Acceptance/AcceptanceContainer";
import CreateContainer from "./Create/CreateContainer";
import ShareContainer from "./Share/ShareContainer";
import FooterContainer from "./Footer/FooterContainer";

const LoginContainer = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <RegisterContainer />
      <AcceptanceContainer />
      <CreateContainer />
      <ShareContainer />
      <FooterContainer />
    </Fragment>
  );
};

export default LoginContainer;
