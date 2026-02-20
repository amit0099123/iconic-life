import React from "react";
import { Placeholder } from "rsuite";
const LoderView = () => {
  return (
    <>
      <div className="row g-0 px-3 py-5">
        <div className="col-12 col-md-9 px-5">
          <Placeholder.Graph active />
          <Placeholder.Paragraph style={{ marginTop: 10 }} rows={5} active />
        </div>
        <div className="col-12 col-md-3">
          <Placeholder.Paragraph
            style={{ marginTop: 30 }}
            graph="image"
            active
          />
          <Placeholder.Paragraph
            style={{ marginTop: 30 }}
            graph="image"
            active
          />
          <Placeholder.Paragraph
            style={{ marginTop: 30 }}
            graph="image"
            active
          />
          <Placeholder.Paragraph
            style={{ marginTop: 30 }}
            graph="image"
            active
          />
        </div>
      </div>
    </>
  );
};

export default LoderView;
