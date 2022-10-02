//온도 fetch 이용해서 임의로 가져온것
fetch('http://152.67.207.160:32023/api/schoolNotice')
    .then(response => response.json())
    .then(json => { 
        console.log(json[0].num) 
        const el = document.querySelector('#temperature')
        el.innerHTML=json[0].num
    })

    function detectMobileDevice(agent) {
        const mobileRegex = [
          /Android/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i
        ]
      
        return mobileRegex.some(mobile => agent.match(mobile))
      }
      
      const isMobile = detectMobileDevice(window.navigator.userAgent)
      
      if (isMobile) {
        true
      } else {
        alert('쿠름이는 모바일 접속을 권장합니다!')
      }
