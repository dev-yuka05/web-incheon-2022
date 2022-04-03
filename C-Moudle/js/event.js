const doc = [
    {
        name:"거제시 유자",
        img:"./image/특산품/거제시_유자.jpg"
    },
    {
        name:"거창군 사과",
        img:"./image/특산품/거창군_사과.jpg"
    },
    {
        name:"고성군 방울토마토",
        img:"./image/특산품/고성군_방울토마토.jpg"
    },
    {
        name:"김해시 단감",
        img:"./image/특산품/김해시_단감.jpg"
    },
    {
        name:"남해군 마늘",
        img:"./image/특산품/남해군_마늘.jpg"
    },
    {
        name:"밀양시 대추",
        img:"./image/특산품/밀양시_대추.jpg"
    },
    {
        name:"사천시 멸치",
        img:"./image/특산품/사천시_멸치.jpg"
    },
    {
        name:"산청군 약초",
        img:"./image/특산품/산청군_약초.jpg"
    },
    {
        name:"양산시 매실",
        img:"./image/특산품/양산시_매실.jpg"
    },
    {
        name:"의령군 수박",
        img:"./image/특산품/의령군_수박.jpg"
    },
    {
        name:"진주시 고추",
        img:"./image/특산품/진주시_고추.jpg"
    },
    {
        name:"창녕군 양파",
        img:"./image/특산품/창녕군_양파.jpg"
    },
    {
        name:"창원시 풋고추",
        img:"./image/특산품/창원시_풋고추.jpg"
    },
    {
        name:"통영시 굴",
        img:"./image/특산품/통영시_굴.jpg"
    },
    {
        name:"하동군 녹차",
        img:"./image/특산품/하동군_녹차.jpg"
    },
    {
        name:"함안군 밤",
        img:"./image/특산품/함안군_밤.jpg"
    },
    {
        name:"합천군 돼지고기",
        img:"./image/특산품/합천군_돼지고기.jpg"
    }
];

let randomImg = [];

while (doc.length > 0) {
  let img = Math.floor(Math.random() * doc.length);
  let mixedImg = doc.splice(img, 1)[0];
  randomImg.push(mixedImg);
};

var x = 4;
var y = 4;

const cardSetting = (x, y) => {
    for(let i = 0; i < x * y; i++){
        const card = document.createElement('div');
        card.className = 'card'

        document.querySelector('.card-game .game').appendChild(card);
    }
};

cardSetting(x, y);
