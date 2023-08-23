import React, { useState } from 'react';
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Header from './Header'
import Footer from './Footer'
export default function Collapse() {
  const [showFirstElement, setShowFirstElement] = useState(false);
  const [showSecondElement, setShowSecondElement] = useState(false);

  const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
  const toggleSecondElement = () => setShowSecondElement(!showSecondElement);

  const toggleBothElements = () => {
    setShowFirstElement(!showFirstElement);
    setShowSecondElement(!showSecondElement);
  };
  return (
    <>
                <Header />

      <div style={{ position: 'relative ', right: 'px ', display: 'flex', justifyContent: 'center', top: '', margin: '50px', marginLeft: '20px', gap: '16px' }}>
      <MDBBtn onClick={toggleFirstElement}> Toggle first element</MDBBtn>
      <MDBBtn onClick={toggleSecondElement}>Toggle second element</MDBBtn>
      <MDBBtn onClick={toggleBothElements}> Toggle both elements</MDBBtn>

</div>
      <MDBRow>
        <MDBCol>
          <MDBCollapse show={showFirstElement} className='mt-3'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBCol>
        <MDBCol>
          <MDBCollapse show={showSecondElement} className='mt-3'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBCol>
      </MDBRow>
                      <Footer />

    </>
  );
}