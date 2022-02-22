const age = parseInt(prompt("How old are you?")); 

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
}
else if (age < 18) {
    console.log("미성년자 술 안팔아요~");
}
else if (age >= 18 && age <= 50) {
    console.log("음주 쌉가능");
}
else if (age > 50 && age <= 80) {
    console.log("술보단 운동해야 할듯");
}
else if (age > 80) {
    console.log("맘대로 하시죠 어르신");
}