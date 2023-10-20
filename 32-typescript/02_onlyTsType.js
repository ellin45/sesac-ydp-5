//Tuple
var drink = ["사이다", "롯데"];
drink[0] = 'cider';
drink[1] = 'lotte';
//drink.push('dkdkd') 이렇게 하면 tuple한 의미가 없음  tuple 의 한계
console.log(drink);
//readonly: 요소 타입 순서와 길이 고정
var drink2 = ['사이다', 2200];
drink.push('얏호'); //error
var product1 = [1, '로지텍 MX master3', 130000];
var product2 = [2, '로지텍 K380', 52000];
// let product3: productInfo = [2, '로지텍 K380' ,'Apple']; typeError
var Auth;
(function (Auth) {
    Auth[Auth["admin"] = 0] = "admin";
    Auth[Auth["user"] = 1] = "user";
    Auth[Auth["guest"] = 2] = "guest";
})(Auth || (Auth = {}));
var Cafe;
(function (Cafe) {
    Cafe["americano"] = "\uC544\uBA54\uB9AC\uCE74\uB178";
    Cafe["latte"] = "\uCE74\uD398\uB77C\uB5BC";
})(Cafe || (Cafe = {}));
console.log(Auth.admin);
console.log(Cafe.latte);
var Cake;
(function (Cake) {
    Cake[Cake["choco"] = 0] = "choco";
    Cake[Cake["vanilla"] = 1] = "vanilla";
    Cake["kiwi"] = "\uD0A4\uC704 \uCF00\uC774\uD06C";
})(Cake || (Cake = {}));
console.log(Cake.choco);
console.log(Cake.kiwi);
//명시적으로
var val;
val = true;
val = '하이';
val = '19999';
val = { name: 'sesac' };
//암묵적으로
var val2;
val2 = false;
val2 = '바이';
var game = [{ name: "쇼트트랙", type: "혼성 계주" }, true];
var student1 = {
    name: 'jinheyoung',
    isPassed: true,
    // addr: 'seoul',
};
var student2 = {
    name: 'jinheyoung',
    isPassed: true,
    // addr: 'seoul',
};
var otani = {
    name: 'otani',
    isPassed: true,
    position: 'pitcher',
    height: 193,
    1: 'A+' // 학년: 점수
    // 2: 'NP',
};
console.log(otani);
