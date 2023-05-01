const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// total price If a customer has a subscription, 
// then customer will receive a 25% discount after the refill total has been calculated

// total price If the customer has a coupon, the customer will receive a $10 discount after 
// the subscription discount has been calculated.

// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

function sumOfpricePerRefill(pricePerRefill, refills, subscription = false, coupon = true) {

    let total = pricePerRefill * refills;
   
    if (subscription) {
        total = total - (total * 0.25);
}

    if (coupon) {
        total = total -10;
    }

    return total;
}    

console.log("Timmy, Your grand total is $" + sumOfpricePerRefill(timmy.pricePerRefill, timmy.refills, timmy.subscription, timmy.coupon,));

// create function states price x refills with if & returns total price for customer sarah

function sumOfpricePerRefill(pricePerRefill, refills, subscription = true, coupon =false) {

    let total = pricePerRefill * refills;

    if (subscription) {
        total = total - (total * 0.25);
}

    if (coupon) {
        total = total -10;
    }

    return total; 
}

console.log("Sarah, Your grand total is $" + sumOfpricePerRefill(sarah.pricePerRefill, sarah.refills, sarah.subscription, sarah.coupon));

// create function states price x refills with ifs & returns total price for customer rocky

function sumOfpricePerRefill(pricePerRefill, refills, subscription = true, coupon =true) {

    let total = pricePerRefill * refills;
    if (subscription) {
        total = total - (total * 0.25);
}

    if (coupon) {
        total = total -10;
    }

    return total;

}

console.log("Rocky, Your grand total is $" + sumOfpricePerRefill(rocky.pricePerRefill, rocky.refills, rocky.subscription, rocky.coupon));