let Guest_List :string[] =['kamran Tesorri','Zia Khan','Daniyal Nagori'];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] +'\n\nIt is my pleasure to invite you in our party.\n\nThank You !')

}

let absent_Guest :string = 'Kamran Tessori';
let new_Guest :string = 'Dayneee';
Guest_List[0] = new_Guest ; 

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ') + Guest_List[i] +'\n\nIt is mt pleasure to invite you our party.\n\nThank You ! '

    console.log(`Mr ${absent_Guest} is not coming to the party.`)
}