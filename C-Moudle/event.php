<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>경상남도 특산물 : 이벤트</title>
    <link rel="stylesheet" href="./style/event.css">
</head>
<body>

    <!-- 상단 타이틀 -->
    <div class="head">
        <h1>
            <span style="color: rgb(223, 223, 223);">경남에서 준비한</span><br>
            당신을 위한 이벤트
        </h1>
    </div>
    
    <!-- 이벤트 안내 -->
    <div class="guid">
        <h1>이벤트 안내</h1>
        <p>        
            경상남도 특산품을 기억하라! 같은 카드 찾기 게임에 3일 연속 이벤트에 참여해 주신 분 중 100분을 추첨하여
            전통시장 및 상점에서 사용 가능한 “온누리 상품권 5,000원권”을 보내 드립니다.
            경상남도 특산품도 알아보고 재미있는 게임도 즐길 수 있는 이번 이벤트에 많은 참여 바랍니다.
        </p>
        <h1 class="title">○ 이벤트 참여 및 경품 안내</h1>
        <p>
            - 참여방법 : 3일 연속으로 아래의 같은 카드 찾기 게임 참여하기<br>
            - 경품안내 : 온누리 상품권 5,000원권<br>
            - 당첨대상 : 3일 연속 게임 이벤트에 참여한 분 중 100명 추첨
        </p>
    </div>

    <!-- 카드게임, 출석체크 이벤트 부분 -->
    <div class="games">
        <h1>카드 게임</h1>

        <!-- 카드게임 -->
        <div class="card-game">

            <!-- 카드게임 카드 -->
            <div class="game">
                

            </div>

            <!-- 카드게임 정보, 출석체크 -->
            <div>

                <!-- 카드 게임 정보 -->
                <div class="timer">
                    <label for="time">남은 시간</label>
                    <input readonly="" value="01 : 26" type="text" id="time">
                </div>
                <div class="collect">
                    <label for="collect">찾은 카드 수</label>
                    <input readonly="" value="1" type="text" id="collect">
                </div>
                <div class="button">
                    <button>다시하기</button>
                    <button>힌트보기</button>
                </div>

                <!-- 출석체크 -->
                <div class="check">
                    <ul>
                        <li>👍<span>2022.03.29</span></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <button>출석 확인</button>
                </div>
            </div>
        </div>

    </div>

    <script src="./js/event.js"></script>
</body>
</html>