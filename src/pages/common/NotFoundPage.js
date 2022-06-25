import React from "react";
import NotFound from "../../components/common/not-found/not-found";
import PageHeader from "../../components/user/common/page-header/page-header";
import Spacer from "../../components/user/common/spacer/spacer";

const NotFoundPage = () => {
  return (
    <>
      <PageHeader title="Not Found" />
      <Spacer />
      <NotFound />
      <Spacer />
    </>
  );
};

export default NotFoundPage;
