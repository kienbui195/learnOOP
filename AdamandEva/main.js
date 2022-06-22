let apple = new Apple(10);
let adam = new Human('Adam','male', 80);
let eva = new Human('Eva','female', 55);

adam.saySomething();
document.write('<br>'+'can nang cua adam truoc khi an tao: ' + adam.checkWeight());
adam.eatApple(apple.isEmpty(),apple.decreaseWeight());
document.write('<br>'+'can nang cua adam sau khi an tao: ' + adam.checkWeight());
document.write('<br>' + 'khoi luong trai tao con lai: ' + adam.viewAppleWeight(apple.weight));
document.write('<br>');
adam.viewInfo(eva);
