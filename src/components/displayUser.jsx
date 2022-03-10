import React from "react";

const userArr = [
  {
    Name: "Esmeralda Curry",
    Email: "smrldCrry@gmail.com",
    Age: "45",
    Address:
      "#170 EDAP Building Cenetr, Boni Serrano Road, Camp Aguinaldo,Quezon City,Philippines",
    Creationdate: "05/08/19",
    Accountnumber: 1,
    InitialDeposit: 25193.5,
  },
  {
    Name: "Aida Krause",
    Email: "dKrs@gmail.com",
    Age: "59",
    Address: "Prudential Bank Building,Manila,Philippines",
    Creationdate: "06/05/19",
    Accountnumber: 2,
    InitialDeposit: 87377.6,
  },
  {
    Name: "Cyril Caldwell",
    Email: "CyrlCldwll@gmail.com",
    Age: "41",
    Address: "103 10th Street, New Manila Mariana,Quezon City,Philippines",
    Creationdate: "08/05/19",
    Accountnumber: 3,
    InitialDeposit: 94809.8,
  },
  {
    Name: "Letha Welch",
    Email: "LthWlch@gmail.com",
    Age: "43",
    Address:
      "Onyxson Building 2066 Onyx St. Fabie Estate, Paco, Manila,Manila,Philippines",
    Creationdate: "10/25/19",
    Accountnumber: 4,
    InitialDeposit: 10692.35,
  },
  {
    Name: "Gretchen Young",
    Email: "GrtchnYng@gmail.com",
    Age: "28",
    Address: "Concepcion Street,Sogod,Philippines",
    Creationdate: "12/05/19",
    Accountnumber: 5,
    InitialDeposit: 21623.7,
  },
  {
    Name: "Gilbert Heath",
    Email: "GlbrtHth@gmail.com",
    Age: "34",
    Address:
      "43 Clarinda Soriano Street, B F Resort Village,Las Pinas,Philippines",
    Creationdate: "01/31/20",
    Accountnumber: 6,
    InitialDeposit: 84370.1,
  },
  {
    Name: "Concepcion Rocha",
    Email: "CncpcnRch@gmail.com",
    Age: "49",
    Address:
      "SM Mall of Asia, SM Central Business Park, Bay City,Pasay City,Philippines",
    Creationdate: "07/24/20",
    Accountnumber: 7,
    InitialDeposit: 10669.3,
  },
  {
    Name: "August Shannon",
    Email: "gstShnnn@gmail.com",
    Age: "42",
    Address: "C Santos Subdivision 1400,Valenzuela,Philippines",
    Creationdate: "08/19/20",
    Accountnumber: 8,
    InitialDeposit: 15094.5,
  },
  {
    Name: "Beatriz Morrison",
    Email: "BtrzMrrsn@gmail.com",
    Age: "59",
    Address:
      "Suite 101, M/F Eastgate Center Building, 169 EDSA,Mandaluyong City,Philippines",
    Creationdate: "03/19/21",
    Accountnumber: 10,
    InitialDeposit: 104010.96,
  },
  {
    Name: "Thomas Oconnell",
    Email: "Thmscnnll@gmail.com",
    Age: "62",
    Address: "486 Tunhua Rd.,Peitun Area,Taiwan",
    Creationdate: "05/25/21",
    Accountnumber: 11,
    InitialDeposit: 104848.69,
  },
  {
    Name: "Ahmad Duffy",
    Email: "hmdDffy@gmail.com",
    Age: "58",
    Address: "Alley 9, Lane 22, Wende Rd.,Neihu Dist.,Taiwan",
    Creationdate: "06/07/21",
    Accountnumber: 12,
    InitialDeposit: 32305.77,
  },
  {
    Name: "Annie Garrison",
    Email: "nnGrrsn@gmail.com",
    Age: "52",
    Address: "62, Chung I 1 Street,Jen Te Hsiang,Taiwan",
    Creationdate: "06/09/21",
    Accountnumber: 13,
    InitialDeposit: 67470.34,
  },
  {
    Name: "Lonnie Fitzpatrick",
    Email: "LnnFtzptrck@gmail.com",
    Age: "29",
    Address: "No. 9-1,Ichang E. Rd.,Taiwan",
    Creationdate: "10/06/21",
    Accountnumber: 14,
    InitialDeposit: 113205.33,
  },
  {
    Name: "Maryellen Herman",
    Email: "MryllnHrmn@gmail.com",
    Age: "43",
    Address: "Bldg. A, Niuchouhsi, Fuhsing Village,Miuhsiung Hsiang,Taiwan",
    Creationdate: "02/02/22",
    Accountnumber: 15,
    InitialDeposit: 73788.25,
  },
  {
    Name: "Queen Zamora",
    Email: "QnZmr@gmail.com",
    Age: "19",
    Address: "2005 Radford Street,ouisville,United States",
    Creationdate: "03/22/22",
    Accountnumber: 16,
    InitialDeposit: 89750.22,
  },
  {
    Name: "Jayne Benjamin",
    Email: "JynBnjmn@gmail.com",
    Age: "59",
    Address: "2305 Kennedy Court,indsor,United States",
    Creationdate: "06/29/22",
    Accountnumber: 17,
    InitialDeposit: 113762.1,
  },
  {
    Name: "Alphonso Burns",
    Email: "lphnsBrns@gmail.com",
    Age: "32",
    Address: "1702 Felosa Drive,os Angeles,United States",
    Creationdate: "09/01/22",
    Accountnumber: 18,
    InitialDeposit: 37627.14,
  },
  {
    Name: "Jarrod Wallace",
    Email: "JrrdWllc@gmail.com",
    Age: "23",
    Address: "4926 Queens Lane,almyra,United States",
    Creationdate: "10/17/22",
    Accountnumber: 19,
    InitialDeposit: 100054.65,
  },
  {
    Name: "Melissa Faulkner",
    Email: "MlssFlknr@gmail.com",
    Age: "38",
    Address: "3702 Wescam Court,eno,United States",
    Creationdate: "11/23/22",
    Accountnumber: 20,
    InitialDeposit: 65362.85,
  },
];

const Header = () => {
  return (
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
      <th>Address</th>
      <th>Creation Date</th>
      <th>Account Number</th>
    </tr>
  );
};

const Rows = ({ userInfo }) => {
  return userInfo.map(props => (
    <tr>
      <td>{props.Name}</td>
      <td>{props.Email}</td>
      <td>{props.Age}</td>
      <td>{props.Address}</td>
      <td>{props.Creationdate}</td>
      <td>{props.Accountnumber}</td>
    </tr>
  ));
};

const Table = ({ userInfo }) => {
  return (
    <table>
      <Header />
      <Rows userInfo={userArr} />
    </table>
  );
};
export default Table;
