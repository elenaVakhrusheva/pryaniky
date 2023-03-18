import React from "react";

const logout = e => {
  e.preventDefault();
  localStorage.removeItem('shop-user');
  setToken(false);
}

export default ({ table }) => {
  return <>
  <div className="wrapper">
    <a href="" onClick={e=> {e.preventDefault();}}>Выйти</a>

    <div>
      {data.map((d, i) => <Table
        key={id}
        companySigDate={d.companyDate}
        companySignatureName={d.companyName}
        documentName={d.docName}
        documentStatus={d.docStatus}
        documentType={d.docType}
        employeeNumber={d.empNumer}
        employeeSigDate={d.empDate}
        employeeSignatureName={d.empName} />)}
    </div>
  </div>
  </>
}