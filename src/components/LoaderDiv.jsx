import React from "react";
import { Placeholder } from "rsuite";
const LoaderDiv = () => {
  return (
    <>
      <div className="container">
        <div className="row g-0 p-5">
          <div className="col-md-4 col-sm-12 px-3">
            <Placeholder.Graph active />
            <Placeholder.Paragraph style={{ marginTop: 10 }} rows={5} />
          </div>
          <div className="col-md-4 col-sm-12 px-3">
            <Placeholder.Graph active />
            <Placeholder.Paragraph style={{ marginTop: 10 }} rows={5} />
          </div>
          <div className="col-md-4 col-sm-12 px-3">
            <Placeholder.Graph active />
            <Placeholder.Paragraph style={{ marginTop: 10 }} />
            <Placeholder.Paragraph style={{ marginTop: 10 }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoaderDiv;
