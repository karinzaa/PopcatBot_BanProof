console.clear()
let keyDownEvent = new KeyboardEvent("keydown", { key: "-" });
let keyUpEvent = new KeyboardEvent("keyup", { key: "-" });
console.log("%c Bot เริ่มทำงานแล้ว ระบบจะส่ง 800 pops ทุกๆ 30วิ ", "background: #050; color: #0f0");
function legitPop() {
  document.dispatchEvent(keyDownEvent);
  document.dispatchEvent(keyUpEvent);
}

async function legitMassPop(pop_count) {
  for (let i = 0; i < pop_count; i++) {
    legitPop();
  }
}

function legitClearCookie(cookie_name) {
  let cookies = document.cookie.split(";").map((cookieString) => {
    let cookieArray = cookieString.trim().split("=");
    return {
      name: cookieArray[0] ? cookieArray[0] : "",
      propertyString: cookieArray[1] ? cookieArray[1] : ""
    };
  });

  let filteredCookies = cookies.filter(
    (cookie) =>
      cookie.propertyString && cookie.name.toLowerCase() !== cookie_name
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

function legitMassPopProcess(pop_count, cookie_name) {
  legitClearCookie(cookie_name);
  legitResetSequentialMaxPops();
  legitMassPop(pop_count);
    console.log(`[${new Date().toLocaleTimeString()}] %cคุณได้ส่ง 800 pops ส่งสำเร็จ`, "background: #050; color: #0f0");
    return;
}

function legitStartAutomation(pop_count, interval = 30e3, cookie_name = "bot") {
  legitMassPopProcess(pop_count, cookie_name);
  setInterval(() => {
    legitMassPopProcess(pop_count, cookie_name);
  }, interval);
}

legitStartAutomation(800);