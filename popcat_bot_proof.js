/*
1) เปิด https://popcat.click
2) เปิด console (F12 or CTRL+SHIFT+I)
3) เอา code ใส่แล้ว enter
4) ดูความคืนหน้าได้ใน console

popcat.click จะรับแค่ 800 pops ทุกๆ 30วิ ต่อ 1 IP และถ้าส่งเกินแบบนี้10ครั้งจะโดนโดนตีตราว่าใช้ bot ต้อง clear cookie
*/

console.clear()
let keyDownEvent = new KeyboardEvent("keydown", { key: "-" });
let keyUpEvent = new KeyboardEvent("keyup", { key: "-" });
console.log("%c🐱:popcat.click จะรับแค่ 800 pops ทุกๆ 30วิ ต่อ 1 IP และถ้าส่งเกินแบบนี้10ครั้งจะโดนโดนตีตราว่าใช้ bot ต้อง clear cookie", "background: #050; color: #0f0");
console.log("%c🐱: Bot เริ่มทำงานแล้ว ระบบจะส่ง 800 pops ทุกๆ 30วิ ", "background: #050; color: #0f0");
function legitPop() {
  document.dispatchEvent(keyDownEvent);
  document.dispatchEvent(keyUpEvent);
}

async function legitMassPop(popCount) {
  for (let i = 0; i < popCount; i++) {
    legitPop();
  }
}


function legitClearCookie(cookieName) {
  let cookies = document.cookie.split(";").map((cookieString) => {
    let cookieArray = cookieString.trim().split("=");
    return {
      name: cookieArray[0] ? cookieArray[0] : "",
      propertyString: cookieArray[1] ? cookieArray[1] : ""
    };
  });

  let filteredCookies = cookies.filter(
    (cookie) =>
      cookie.propertyString && cookie.name.toLowerCase() !== cookieName
  );
  let cookieStringArray = filteredCookies.map((cookie) =>
    cookie.name.concat("=").concat(cookie.propertyString)
  );
  let cookieString = cookieStringArray.join("; ");

  document.cookie = cookieString;
}

function legitResetSequentialMaxPops() {
  let vueElement = document.getElementById("app").__vue__;

  vueElement.sequential_max_pops = 0;
}

function legitMassPopProcess(popCount, cookieName) {
  legitClearCookie(cookieName);
  legitResetSequentialMaxPops();
  legitMassPop(popCount);
    console.log(`[${new Date().toLocaleTimeString()}] %c🐱: คุณได้ส่ง 800 pops ส่งสำเร็จ`, "background: #050; color: #0f0");
    return;
}

function legitStartAutomation(popCount, interval = 30e3, cookieName = "bot") {
  legitMassPopProcess(popCount, cookieName);
  setInterval(() => {
    legitMassPopProcess(popCount, cookieName);
  }, interval);
}
legitStartAutomation(800);

