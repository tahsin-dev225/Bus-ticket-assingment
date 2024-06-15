
/*const ticketBtn =document.getElementById('buy-tickets')

function buyTickets(){
    document.getElementById('select-section')
}

function(){
    const seatleft=document.getElementById('seat-left')
    const seatleftText =seatleft.innerText;
    const leftSeatNum = parseInt(seatleftText)
    const newSeat = leftSeatNum-1;
    //console.log( newSeat)
    seatleft.innerText =newSeat;
}*/
function bgChange(id){
    const getId =document.getElementById(id)
    getId.style.backgroundColor = 'green'
    getId.style.color ='white'
}

function leftSeat(id){
    const seatleft=document.getElementById(id)
    const seatleftText =seatleft.innerText;
    const leftSeatNum = parseInt(seatleftText)
    const newSeat = leftSeatNum-1;
    //console.log( id)
    seatleft.innerText =newSeat;
}

function seatCount(id){
    const seatleft=document.getElementById(id)
    const seatleftText =seatleft.innerText;
    const leftSeatNum = parseInt(seatleftText)
    const newSeat = leftSeatNum+1;
    //console.log( newSeat)
    seatleft.innerText =newSeat;
    //return newSeat;
}

function seatCounted(id){
    const seatleft=document.getElementById(id)
    const seatleftText =seatleft.innerText;
    const leftSeatNum = parseInt(seatleftText)
    return leftSeatNum;
}
function totalTicketPrice (id){
    const element =document.getElementById(id)
    const eleText = element.innerText;
    const eleNum =parseInt(eleText)
    const newNum = eleNum + 550;
    element.innerText =newNum;
    
    return newNum
}



function seatType(name){
    const seatCon =document.getElementById('seat-con');
    const seatNewDiv = document.createElement('div');
    seatNewDiv.style.display ='flex';
    seatNewDiv.style.justifyContent ='space-between'
    seatNewDiv.innerHTML =`
    <p>${name}</p>
    <p>Economoy</p>
    <p>550</p>
    `
    seatCon.appendChild(seatNewDiv)   
}
//main
 /* function selectSeat(id){
    bgChange('a1')
    leftSeat('seat-left')
    totalTicketPrice('ticket-total-price')
    seatType()
} */


/*function selected(){
    const getId =document.getElementById('A2')
    getId.style.backgroundColor = 'green'
    getId.style.color ='white'
}

function selectSeatA2(){
    const getId =document.getElementById('a2')
    getId.style.backgroundColor = 'green'
    getId.style.color ='white'
    const seatleft=document.getElementById('seat-left')
    const seatleftText =seatleft.innerText;
    const leftSeatNum = parseInt(seatleftText)
    const newSeat = leftSeatNum-1;
    seatleft.innerText =newSeat;
    ticketList('ticket-list2')
    totalTicketPrice('ticket-total-price')
} 
 const setClr =document.getElementById('A1')
setClr.style.backgroundColor=green; */

/**/ 

 
 
 function handleSeatButtonClick(){
    const words='abcdefghi'.split('')
    console.log(words.length)
for (let i = 0; i < words.length; i++) {
    const element = words[i];
    for (let j = 0; j < 4; j++) {
        //  console.log(`element${j+1}`)
        const number=j+1;
        const id= element+number 
             document.getElementById(id).addEventListener('click' , function (){

                 console.log('conect')
                 selectSeat(id)
             })
        

        
     
        
    }
} 
 } 
  handleSeatButtonClick( ) 

//   function newId(){
//     const words='abcdefjhi'.split('')
 
// for (let i = 0; i < words.length; i++) {
//     const element = words[i];
//     for (let j = 0; j < 4; j++) {
//         //  console.log(`element${j+1}`)
//         const number=j+1;
//         const id="#"+element+number
//         console.log(id,document.querySelector(id))
        
//     }
// } 
// }
 
 
function discount(i){
   
    const dis = i/100;
    const offer = dis *15;
    const main =i - offer;
    return main;
    console.log(main)
}

function apply(){
    const coponText =idText('coupon')
    if(coponText === 'new15'){
        const ele =discount(parseInt(document.querySelector("#ticket-total-price").innerText))
        const ment =document.getElementById('grand-total')
        ment.innerText =ele ;
    }
    
}

function idText(id){
    const element =document.getElementById(id);
    const eleText =element.value;
    return eleText;
    //console.log(eleText)

}



//seats
function selectSeat(id){
    let i = seatCounted('seat-count');
    if(i <= 3){
    bgChange(id)
    leftSeat('seat-left','c3')
    seatType(id)
    totalTicketPrice('ticket-total-price')
    apply()
    seatCount('seat-count')
    }
}
 