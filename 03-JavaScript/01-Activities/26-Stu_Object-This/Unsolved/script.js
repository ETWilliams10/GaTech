console.log(this);
// Logs Window

function helloThis() {
  console.log('Inside this function, this is ' + this);
  //Declaring the function helloThis
}

var child = {
  age: 10,
  //Declaring key value pair "age"
  ageTenYears: function () {
    console.log(this.age + 10);
    // Declaring the function ageTenYears
  },
};

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};
