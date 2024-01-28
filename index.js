function scuberGreetingForFeet(distance){
  let freeRide, chargeTwenty, chargeThirty, chargeNever;
  if (distance <= 400) 
    return freeRide = 'This one is on me!'
  else if (distance >= 400)
  if (distance <= 2000)
    return chargeTwenty = 'That will be twenty bucks.'
  else if (distance > 2000)
  if (distance < 2500)
    return chargeThirty = 'I will gladly take your thirty bucks.'
  else (distance >= 2500)
  return chargeNever = 'No can do.'
}


function ternaryCheckCity(city){
 return (city === 'NYC')? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous' :
      return 'Thank you so much.' 
    case 'not as generous' : 
      return 'Thank you.';
    default : 
      return 'Bye.';      
  }
}
