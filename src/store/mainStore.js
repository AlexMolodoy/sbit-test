import { makeAutoObservable } from "mobx";

class store {

  currentState = null;
  currentUser = 1;

  constructor() {
    makeAutoObservable(this);
  }

  userChange = (id) => {
    this.currentUser = id;
  }

  fetchData = () => {
    fetch('http://api.sbit500.pro/api/testjob?id_user=' + this.currentUser)
      .then(response => response.json())
      .then(response => this.currentState = response);
  }

  downloadData = () => {
    this.fetchData();
    setInterval(()=> this.fetchData(), 10000);
  }

  totalSum = () => {
    return this.currentState.reduce((acc, cur) => {
      return (acc + (Number(cur.balance) * Number(cur.price)));
      },0).toFixed(6);
  }

  orderSum = () => {
    let sum = 0;
    this.currentState.forEach(element => (sum += Number(element.frozen) * Number(element.price)));
    return Math.floor(sum * 1000000) / 1000000;
  }

  freeSum = () => {
    let sum = 0;
    for (let i = 0; i < this.currentState.length; i++) {
      sum += Number(this.currentState[i].available) * Number(this.currentState[i].price);
    }
    return sum.toFixed(6);
  }

}

export default new store();