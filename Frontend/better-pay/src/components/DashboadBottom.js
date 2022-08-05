import React from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { CDBBtn,CDBInput,CDBBox,CDBRating, CDBContainer } from 'cdbreact';


const DashboardBottom = () => {
  return (
    <div>
        
        <p>Choose the lender</p>
        
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
          <td>Friend1</td>
          <td>2%</td>
          <td>2,000</td>
          <td><CDBRating iconRegular /></td>
        </tr>
        <tr>
          <td>Friend2</td>
          <td>3%</td>
          <td>250</td>
          <td><CDBRating iconRegular /></td>
        </tr>
        <tr>
          <td>Friend3</td>
          <td> 1.5% </td>
          <td>3000</td>
          <td><CDBRating iconRegular /></td>
        </tr>
      </tbody>
    </Table>

    <p>Loan Figures</p>

    <Form.Select aria-label="Listview">
      <option>Pick</option>
      <option value="1">Friend1</option>
      <option value="2">Friend2</option>
      <option value="3">Friend3</option>
    </Form.Select>

    <div>
        <p>    </p>
    </div>
    <CDBContainer>
        <CDBBox display="flex" justifyContent="center">
            <CDBInput type="text" placeholder="Amount in $" color="success" />
            <CDBInput type="text" placeholder="Interest Rate" color="success" />
            <CDBInput type="text" placeholder="Return Date" color="warning" />
            
            
            
        </CDBBox>
        <CDBBox display="flex" justifyContent="center">
            <CDBBtn block={true} className="SubmitButton1" color="success" circle>
             Submit
            </CDBBtn>
        </CDBBox>
        
        
    </CDBContainer>
    
        

       
    </div>
  )
}


export default DashboardBottom