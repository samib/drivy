'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);




function dateDiff(date1, date2) {
  var diff = {}                           
  var date1 = new Date(date1);
  var date2 = new Date(date2);   
  var tmp = date2 - date1;  //Difference
  tmp = Math.floor(tmp / 1000);  //Convert
  diff.sec = tmp % 60;                    

  tmp = Math.floor((tmp - diff.sec) / 60);    
  diff.min = tmp % 60;                    

  tmp = Math.floor((tmp - diff.min) / 60);    
  diff.hour = tmp % 24;                   

  tmp = Math.floor((tmp - diff.hour) / 24);   
  diff.day = tmp+1;
  return diff.day;////return the time
}





function exercice1_2() 
{

  for (var i = 0; i < rentals.length; i++) 
  {
    for (var j = 0; j < cars.length; j++)
    {
      if (cars[j].id == rentals[i].carId)   //uses the id corresponding 
      {       
        var jours = dateDiff(rentals[i].pickupDate, rentals[i].returnDate); //uses dates to calculate the time
    
        if (0 < jours <= 3) //conditions that alters the price
        { rentals[i].price = (jours)*(cars[j].pricePerDay*0.9) + rentals[i].distance*cars[j].pricePerKm ; }

        else if (3 < jours <= 9) 
        { rentals[i].price =  (jours)*(cars[j].pricePerDay*0.7) + rentals[i].distance*cars[j].pricePerKm ; }
        
        else if (jours > 9) 
        { rentals[i].price = (jours)*(cars[j].pricePerDay*0.5) + rentals[i].distance*cars[j].pricePerKm ; }

        else { rentals[i].price = (jours)*cars[j].pricePerDay + rentals[i].distance*cars[j].pricePerKm; }
      }
    }
  }
}


function exercice3() 
{

  for (var i = 0; i < rentals.length; i++)
  {
    for (var j = 0; j < cars.length; j++)
    {
      if (cars[j].id == rentals[i].carId) //uses the id corresponding
      {
        var jours = dateDiff(rentals[i].pickupDate, rentals[i].returnDate);//time
        var com = rentals[i].price*0.3;//price of the commission

        rentals[i].commission.insurance = com/2; //splits the price to the 3 parts
        rentals[i].commission.assistance = jours;
        rentals[i].commission.drivy= com - rentals[i].commission.assistance - rentals[i].commission.insurance;
      }
    }
  }
}


function exercice4() 
{

  for (var i = 0; i < rentals.length; i++)
  {
    for (var j = 0; j < cars.length; j++)
    {
      if (cars[j].id == rentals[i].carId)//uses the id corresponding
      {
        var jours = dateDiff(rentals[i].pickupDate, rentals[i].returnDate);//time
        var com = rentals[i].price*0.3;//commission

        if (rentals[i].options.deductibleReduction == true) //check if the reduction exists
        { 
        rentals[i].commission.drivy = com - rentals[i].commission.insurance - rentals[i].commission.assistance + (jours + 1) * 4;
        rentals[i].price = rentals[i].price + (jours + 1) * 4;//attributes the reduction
        }
        else
        {
        rentals[i].commission.drivy = com - rentals[i].commission.insurance - rentals[i].commission.assistance;
        rentals[i].price = rentals[i].price; //inchanged when no reduction
        }

      }
    }
  }
}


exercice1_2();
exercice3();
exercice4();

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);








