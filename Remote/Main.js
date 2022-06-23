
let tivi = new Tivi(1,10);
let remote = new Remote('tivi');

console.log(tivi.code);
remote.changeChannel(tivi,5);
tivi.changeChannel();
console.log(tivi.code);

console.log(tivi.volume);
remote.changeVolume(tivi,50);
tivi.changeVolume();
console.log(tivi.volume);




