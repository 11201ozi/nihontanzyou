setInterval(() => {
    // 現在時間の取得
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
  
    // 時、分、秒を元に角度を計算
    const degH = h * (360 / 12) + m * (360 / 12 / 60);
    const degM = m * (360 / 60);
    const degS = s * (360 / 60);
  
    // 各要素を取得
    const elementH = document.querySelector(".c-clock__hour");
    const elementM = document.querySelector(".c-clock__min");
    const elementS = document.querySelector(".c-clock__sec");
  
    // styleを追加
    elementH.style.transform = `rotate(${degH}deg)`;
    elementM.style.transform = `rotate(${degM}deg)`;
    elementS.style.transform = `rotate(${degS}deg)`;
  }, 10);
  startCol = 0;
  function gradText(tObj)
  {
    txt = document.all[tObj].innerText;
    col = startCol = (startCol + 16) & 0xFF;	//　１６段階に変化
    str = "";
    for (i=0; i<txt.length; i++)
    {
        cStr = "f" + (col += 8).toString(16);
        cStr = cStr.substring(cStr.length-6,cStr.length);
        str += "<font color='#"+cStr+"'>" + txt.charAt(i) + "</font>";
    }
    document.all[tObj].innerHTML = str;
    }