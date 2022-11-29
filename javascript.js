const AddTwoNumbers = (a,b) => {
    return (a+b);
  };
console.log(AddTwoNumbers(2,5))

const Is_Valid = (a,b) => {
    return (a<10 && a>b)
  };
console.log(Is_Valid(5,3))

const Check = (A, B) => {
    if(A%10==0 || B%10==0){
        return true;
    }else if(A%10==0 && B%10==0){
        return true;
    }else{
        return false;
    }
};
console.log(Check(12,20))

const Find_the_remainder = (a,b) => {
    return (b%a);
  };
  console.log(Find_the_remainder(2,9))

const Multiply_two_number = (a,b) => {
    return (a*b);
};
console.log(Multiply_two_number(2,5))

const Sum = (A, B, C) => {
    return (A+B+C);
};
const Average = (A, B, C) => {
    return ((A+B+C)/3);
};
console.log(Sum(50,20,100))
console.log(Average(50,20,100))