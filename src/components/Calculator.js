import React, { useState, useEffect } from "react";

function Calculator() {
  const [mrp, setMrp] = useState(100);
  const [retailPercentage, setRetailPercentage] = useState(20);
  const [stockistPercentage, setStockistPercentage] = useState(10);
  const [gstPercentage, setGstPercentage] = useState(12);
  const [netMargin, setNetMargin] = useState(0);
  const [ptr, setPtr] = useState(0);
  const [pts, setPts] = useState(0);

  const calculateValues = () => {
    const netMarginValue = mrp - mrp * (retailPercentage / 100);
    setNetMargin(netMarginValue);

    const gstFactor = 1 + gstPercentage / 100;
    const ptrValue = netMarginValue / gstFactor;
    setPtr(ptrValue);

    const ptsValue = ptrValue - ptrValue * (stockistPercentage / 100);
    setPts(ptsValue);
  };

  useEffect(() => {
    calculateValues();
  }, [mrp, retailPercentage, stockistPercentage, gstPercentage]);

  return (
    <section className="section-area account-wraper1">
      <div className="container-fluid">
        <div
          className="appointment-inner section-sp2 bg-primary"
          style={{
            backgroundImage: "url(/assets/images/appointment/line-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "20px 140px",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="appointment-form form-wraper">
                  <h3 className="title">PTR &amp; PTS Calculator</h3>
                  <form action="#">
                    <div className="form-group"></div>
                    <div className="form-group">
                      <p className="form_head11">MRP</p>
                      <input
                        type="number"
                        className="form-control"
                        value={mrp}
                        onChange={(e) => setMrp(e.target.value)}
                      />
                      {/* <div className="dropdown bootstrap-select form-select">
                        <select className="form-select">
                          <option selected />{" "}
                        </select>
                        <div className="dropdown-menu ">
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-2"
                            tabIndex={-1}
                          >
                            <ul
                              className="dropdown-menu inner show"
                              role="presentation"
                            ></ul>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="form-group">
                      <p className="form_head11">Retail %</p>
                      <input
                        type="text"
                        className="form-control"
                        value={retailPercentage}
                        onChange={(e) => setRetailPercentage(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <p className="form_head11">Stockist %</p>
                      <input
                        type="number"
                        className="form-control"
                        value={stockistPercentage}
                        onChange={(e) => setStockistPercentage(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <p className="form_head11">GST %</p>
                      <input
                        type="text"
                        className="form-control"
                        value={gstPercentage}
                        onChange={(e) => setGstPercentage(e.target.value)}
                      />
                    </div>
                    {/* <button type="submit" className="btn btn-secondary btn-lg">
                      Calculate
                    </button> */}
                  </form>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-6">
                <div className="appointment-thumb">
                  <div className="images-group">
                    <h2 className="Calc__headd1">
                    Calculate Your Pharma Venture's Profitability Via PTR & PTS Calculation Tool!

                    </h2>
                    <p className="Calc__paraa1">
                    The potential impact of GST has led to a change in the rate calculations for pharma dealers and wholesalers. You may find out how to compute retail and supplier profit margins generally by using the PCD pharma franchise calculator. Price to Stockist (PTS) is an acronym for Price to Retailer (PTR). A net strategy computation is an additional option. With these tools, calculating your profit margins is simple and straightforward. Just fill in any product’s MRP and find the profit margins of retailers and stockists right away. Do the computations right now to find your profit margin!

                    </p>
                    <div className="calc_deta__1">
                      <p>MRP excluding TAX = MRP ÷ {netMargin.toFixed(2)}</p>
                      <p>P.T.R = Above Value – {ptr.toFixed(2)}</p>
                      <p>P.T.S = Above Value – {pts.toFixed(2)}</p>
                    </div>
                    {/*<img class="img2" src="./map-pin.png" alt="">*/}
                    {/*<img class="img3" src="./setting.png" alt="">*/}
                    {/*<img class="img4" src="./check.png" alt="">*/}
                    {/*<img class="img5" src="./chat.png" alt="">*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="pt-img1 animate1"
            src="/assets/images/trangle-orange.png"
            alt=""
          />
          <img
            className="pt-img2 animate-wave"
            src="/assets/images/wave-orange.png"
            alt=""
          />
          <img
            className="pt-img3 animate-wave"
            src="/assets/images/wave-blue.png"
            alt=""
          />
          <img
            className="pt-img4 animate2"
            src="/assets/images/circle-orange.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Calculator;
