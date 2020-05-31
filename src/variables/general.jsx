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
// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
  {
    checked: true,
    text: 'Sign contract for "What are conference organizers afraid of?"'
  },
  {
    checked: false,
    text: "Lines From Great Russian Literature? Or E-mails From My Boss?"
  },
  {
    checked: true,
    text:
      "Your vaccine expired 2 months ago."
  }
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Country", "City", "Date"];
const tbody = [
  {
    className: "table-success",
    data: ["Brazil", "SP", "28-10-2019"]
  },
  {
    className: "",
    data: ["China", "Hwang", "21-11-2019"]
  },
  {
    className: "table-info",
    data: ["Italy", "Pisa", "21-11-2019"]
  },
  {
    className: "",
    data: ["UK", "Birmingham", "23-11-2019"]
  },
  {
    className: "table-danger",
    data: ["EUA", "Malawi", "28-12-2019"]
  },
  { className: "", data: ["Germany", "Berlim", "16-01-2020"] },
  {
    className: "table-warning",
    data: ["China", "Xangai", "20-01-2020"]
  }
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody };
