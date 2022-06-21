


let nokia = new Mobile(25,[],[],[],'on');
let iphone = new Mobile(78,[],[],[],'on');
nokia.typeNewMess('abc');
nokia.sentMess(iphone);
iphone.receiveMess(nokia);
document.write(iphone._inbox);