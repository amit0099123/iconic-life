import React from "react";
import CountUp from "react-countup";
function CountData() {
  return (
    <section class="main_counter_home">
      <div className="container-fluid bg_counterimg45 mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-flex flex-column align-items-center">


            
              <div className="count_1abcde">
              
                
                <h6 className="count_num788">
                <h5 className="cont_nameppp78">Products</h5>
                  <CountUp end={235} enableScrollSpy={true}  />
                </h6>
              </div>

              


            </div>
            <div className="col-lg-3 d-flex flex-column align-items-center">

            

              <div className="count_1abcde">
              
                <h6 className="count_num788">
                <h5 className="cont_nameppp78">Associates</h5>
                  {" "}
                  <CountUp end={336} enableScrollSpy={true} />
                </h6>
              </div>
              
            </div>
            <div className="col-lg-3 d-flex flex-column align-items-center">

            
              <div className="count_1abcde">
              
                
                <h6 className="count_num788">
                <h5 className="cont_nameppp78">Specialty Division</h5>
                  {" "}
                  <CountUp end={227}  enableScrollSpy={true} />
                </h6>
              </div>
              
            </div>
            <div className="col-lg-3 d-flex flex-column align-items-center">

            
              <div className="count_1abcde">
              

                <h6 className="count_num788">
                <h5 className="cont_nameppp78">Employee</h5>
                  {" "}
                  <CountUp end={125} enableScrollSpy={true} />
                </h6>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountData;
