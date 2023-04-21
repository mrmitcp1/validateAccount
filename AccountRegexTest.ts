import {AccountRegex} from "./accountRegex";

let accountRegex=new AccountRegex();
let validAccount : string[]=['123cas_','_das12','_____','123123']
let invalidAccount: string[]=['.@','12345','123_','asdsa'];
for (let account of validAccount){
    let isvalid : boolean = accountRegex.validate(account);
    console.log('account is '+ account + ' is valid: ' + isvalid);

}
for (let account of invalidAccount){
    let isvalid : boolean = accountRegex.validate(account);
    console.log(`account is ${account} is valid : ${isvalid}`)
}