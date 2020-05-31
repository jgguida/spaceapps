/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class Typography extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Emergency contacts</h5>
                </CardHeader>
                <CardBody>
                  <div className="typography-line">
                    <h5>
                      <span>Preferred contact</span>Maria Aquino - phone (99999999999)
                       {" "}
                    </h5>
                  </div>
                  <div className="typography-line">
                    <h5>
                      <span>Contact 2</span>Juliana - phone(88888888888){" "}
                    </h5>
                  </div>
                  <div className="typography-line">
                    <h5>
                      <span>Contact 3</span>Marcos - phone(7777777777777){" "}
                    </h5>
                  </div>
               
                

                 
                 
               
                
                
                 
                
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Typography;
