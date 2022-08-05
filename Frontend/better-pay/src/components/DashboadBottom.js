import React from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import './css/DashboardBottom.css'
import { CDBBtn, CDBInput, CDBBox, CDBRating, CDBContainer } from 'cdbreact';


const DashboardBottom = () => {
  return (
    <div className='holderDashBot'>
      <p className='titleDashBot'>Take out a loan</p>
      <div className='step1Holder allStepHolder'>
        <div className='subtitleWratpper'>
          <div className='stepNumberHolder'>1</div>
          <p className='subtitleDashBot'>Choose the lender</p>
        </div>


        <Table striped="columns" bordered={false} hover>

          <thead >
            <tr>
              <th>Name</th>
              <th>Min Interest Rate</th>
              <th>Max Loan Amount</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mike</td>
              <td>2.00%</td>
              <td>$2,000</td>
              <td>★ ★ ★ ★ ★</td>
            </tr>
            <tr>
              <td>Devi</td>
              <td>3.00%</td>
              <td>$250</td>
              <td>★ ★ ★ ★ ☆</td>
            </tr>
            <tr>
              <td>Thomas</td>
              <td> 1.50% </td>
              <td>$3,000 </td>
              
              <td>★ ★ ★ ☆ ☆</td>

            </tr>
          </tbody>
        </Table>


        <Form.Select className='selectFriend' aria-label="Listview">
          <option>Pick a Friend</option>
          <option value="1">Mike</option>
          <option value="2">Devi</option>
          <option value="3">Thomas</option>
        </Form.Select>
      </div>

      <div className='step2Holder allStepHolder'>
      <div className='subtitleWratpper'>
          <div className='stepNumberHolder'>2</div>
          <p className='subtitleDashBot'>Loan Figures</p>
        </div>
        <CDBContainer>
          <CDBBox className='loanDataHolder'>
            <CDBInput className="inputFeilds" type="text" placeholder="Amount in $" color="success" />
            <CDBInput className="inputFeilds" type="text" placeholder="Interest Rate" color="success" />
            <CDBInput className="inputFeilds" type="text" placeholder="Return Date" color="warning" />
          </CDBBox>
          <p className='aggremetn'>By clicking the button bellow, you agree to our terms and agreements.</p>

          <div className='requestWraper'>
          <div className='requestHolder'>
            <p className='requestText'>Request</p>
          </div>
          </div>

        </CDBContainer>
      </div>

    </div>
  )
}


export default DashboardBottom