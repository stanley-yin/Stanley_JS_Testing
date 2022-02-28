const userIds = ["U01", "U02", "U03"];
const orderIds = ["T01", "T02", "T03", "T04"];

const userOrders = [
  { userId: "U01", orderIds: ["T01", "T02"] },
  { userId: "U02", orderIds: [] },
  { userId: "U03", orderIds: ["T03"] },
];
const userData = { U01: "Tom", U02: "Sam", U03: "John" };
const orderData = {
  T01: { name: "A", price: 499 },
  T02: { name: "B", price: 599 },
  T03: { name: "C", price: 699 },
  T04: { name: "D", price: 799 },
};

const process = (userIds, orderIds, userData, userOrders, orderData) => {
  let resultList = []; // 結果

  // user
  let userList = [];
  userIds.forEach((element, index) => {
    let user = {
      user: { id: element, name: userData[element] },
    };
    userList.push(user);
  });

  // order
  let orderList = [];
  orderIds.forEach((element) => {
    let newOrderData = {
      id: element,
      name: orderData[element].name,
      price: orderData[element].price,
    };
    orderList.push(newOrderData);
  });
  // console.log(userList);
  // console.log(orderList);

  // 合併 userList & orderList
  userOrders.forEach((element, index) => {
    let list = [];
    let resultObj = {};

    // 比對 userOrdersz 的訂單，如果有的話就把orderList的資料push
    orderList.forEach((el) => {
      if (element.orderIds.indexOf(el.id) !== -1) {
        list.push(el);
      }
    });

    resultObj = {
      user: userList[index].user,
      orders: list,
    };
    resultList.push(resultObj);
  });
  console.log(resultList);
};

process(userIds, orderIds, userData, userOrders, orderData);
