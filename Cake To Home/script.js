function PlaceOrder() {
    try {
        const deliveryDate = document.getElementById("deliveryDate").value;
        const cakeType = document.getElementById("cakeType").value;
        const cakeShape = document.getElementById("cakeShape").value;
        const weight = document.getElementById("weight").value;
        const deliveryYes = document.getElementById("deliveryYes").checked;
        const iscutlery = document.getElementById("cutlery").checked;

        console.log(iscutlery);
        

        if (!isValidDeliveryDate(deliveryDate)) {
            document.getElementById("result").innerHTML = "Invalid Delivery Date";
        }
        else {
            let totalCost = getCostOfCakeType(cakeType) + getCostOfCakeShape(cakeShape) + getCostOfCakeDelivery(deliveryYes) + getCostOfCakeWeight(weight);

            if(deliveryYes){
                if(iscutlery){
                    document.getElementById("result").innerHTML = `Your ${weight} Kg ${cakeShape}
                    shaped ${cakeType} cake with
                     door delivery cost is ${totalCost}. Cutlery will be provided`;
                }
                else{
                    document.getElementById("result").innerHTML = `Your ${weight} Kg ${cakeShape}
                    shaped ${cakeType} cake  with
                     door delivery cost is ${totalCost}. Thanks for not opting cutlery`;
                }
            }
            else{
                if(iscutlery){
                    document.getElementById("result").innerHTML = `Your ${weight} Kg ${cakeShape}
                    shaped ${cakeType} cake without
                     door delivery cost is ${totalCost}. Cutlery will be provided`;
                }
                else{
                    document.getElementById("result").innerHTML = `Your ${weight} Kg ${cakeShape}
                    shaped ${cakeType} cake  without
                     door delivery cost is ${totalCost}. Thanks for not opting cutlery`;
                }

            }


        }



        return false;
    }
    catch (e) {
        document.getElementById("result").innerHTML = "Function PlaceOrder: " + e;
    }
}

function getCostOfCakeType(cakeType) {
    try {
        // Fill the code to return the cost based on cake type.
        // Red Velvet=6, Butterscotch=5, Chocolate Truffle=7, Black Forest=8 and White Forest=9 in Dollars.
        let cost = 0;
        if (cakeType === "Red Velvet") {
            cost = 6;
        }
        else if (cakeType === "Butterscotch") {
            cost = 5;
        }
        else if (cakeType === "Chocolate Truffle") {
            cost = 7;
        }
        else if (cakeType === "Black Forest") {
            cost = 8;
        }
        else if (cakeType === "White Forest") {
            cost = 9;
        }

        return cost;


    }
    catch (e) {
        document.getElementById("result").innerHTML = "Function getCostOfCakeType: " + e;
    }
}

function getCostOfCakeShape(cakeShape) {
    try {
        // Fill the code to return the cost based on cake shape.
        // Square=2, Circle=3 and Heart=4 in Dollars.
        let cost = 0;
        if (cakeShape === "Square") {
            cost = 2;
        }
        else if (cakeShape === "Circle") {
            cost = 3;
        }
        else if (cakeShape === "Heart") {
            cost = 4;
        }


        return cost;



    }
    catch (e) {
        document.getElementById("result").innerHTML = "Function getCostOfCakeShape: " + e;
    }
}

function getCostOfCakeDelivery(deliveryYes) {
    try {
        let cost = 0;
        if (deliveryYes) {
            cost = 5;
        }
        else {
            cost = 0;
        }
        return cost;

    }
    catch (e) {
        document.getElementById("result").innerHTML = "Function getCostOfCakeShape: " + e;
    }
}

function getCostOfCakeWeight(weight){
    try {
        let cost=0;

        return cost = weight*10;
        

    } catch (e) {
        document.getElementById("result").innerHTML = "Function getCostOfCakeShape: " + e;
    }
}

function isValidDeliveryDate(deliveryDate) {
    // Don't do any changes in this method
    try {
        var today = new Date();
        deliveryDate = new Date(deliveryDate);

        if (deliveryDate > today) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        document.getElementById("result").innerHTML = "Function checkDeliveryDate: " + e;
    }
}

