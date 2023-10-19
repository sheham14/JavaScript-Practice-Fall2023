const items = ["Rent", "Electricity", "Groceries", "Phone_Bill", "WiFi", "Gym", "Bus_Pass", "Snacks", "Misc", "Subscriptions"];
const costs = [300, 100, 400, 35, 90, 50, 25, 50, 200, 100];

let htmlify = (item, cost) =>  item + cost + "<br>" ;

let output = ""

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("budget").addEventListener("click", function() {
        
        for (let i = 0; i < items.length; i++){
        document.getElementById("budgetTable").innerHTML += htmlify(items[i], costs[i]);


    }});
});
