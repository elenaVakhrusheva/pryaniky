import React from 'react';
// import Api from './utils/api.js'
import { useNavigate } from "react-router-dom";


const tbl = [
  {
    "id": "7546e520-4acc-44b8-bc72-45f5959d9ce5",
    "documentStatus": "Подписан",
    "employeeNumber": "1234",
    "documentType": "Трудовой договор",
    "documentName": "Договор.pdf",
    "companySignatureName": "Договор.sig",
    "employeeSignatureName": "Договор.sig",
    "employeeSigDate": "2022-12-23T11:19:27.017Z",
    "companySigDate": "2022-12-23T11:19:27.017Z"
  },
  {
    "id": "b81cbd88-6123-4aea-8c47-5838a62c1d83",
    "documentStatus": "Подписан",
    "employeeNumber": "1234",
    "documentType": "Приказ о приеме",
    "documentName": "Договор 2.pdf",
    "companySignatureName": "Приказ.sig",
    "employeeSignatureName": "Приказ 2.sig",
    "employeeSigDate": "2022-11-23T11:19:27.017Z",
    "companySigDate": "2022-11-23T11:19:30.027Z"
  }
]

export default function Dashboard(setToken, err, isLoading, data) {
  //const user = getUser();
  const navigate = useNavigate();

  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem('userItem');
    setToken(false);
  }




  const res = tbl.map(function (item, id) {
    return <p key={id}>
      <span>{item.documentStatus}</span>:
      <span>{item.employeeNumber}</span>
    </p>;
  });

  return (
    <div>
      {res}
      Welcome User!<br /><br />

      <input type="button" onClick={handleLogout} value="Logout" />
      <button onClick={() => navigate(-1)}>Go Back</button>

      <div>
        {err && <h2>{err}</h2>}

        {isLoading && <h2>Loading...</h2>}

        {/* {data.map((d, i) => <Table
          key={id}
          companySigDate={d.companyDate}
          companySignatureName={d.companyName}
          documentName={d.docName}
          documentStatus={d.docStatus}
          documentType={d.docType}
          employeeNumber={d.empNumer}
          employeeSigDate={d.empDate}
          employeeSignatureName={d.empName} />)} */}
      </div>


    </div>
  );
}