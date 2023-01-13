// General Library
function typeWrite(p, word, time) {
  for (let m = 0; m < word.length; m++) {
    setTimeout(() => {
      document.querySelector(p).innerHTML += word[m];
    }, m * time); 
  }
}
//typeWrite("#launch-p2", word, 60)

let colors = {
  white: "#ffffff",
  black: "#252525",
  gray: "#4f4f4f",
  beige: "#D6B575",
  yellow: "#e0dc5e",
  green: "#8ad978",
  teal: "#08b8b",
  red: "#db626e",
  maroon: "#c62026",
  lavender: "#CBB6BA",
  cream: "#E6D3C5",
  offPink: "#BE9A9E",
  bwD: "#36220B", bwM: "#5E3E17", bwL: "#986931",
  buD: "#1B1A5E", buM: "#013C7E", buL: "#85B2D1" 
}


// Opening Song Animation
function launch() {
  document.querySelector("#LAUNCH audio").play()
  setTimeout(() => {
    document.querySelector(".flash:nth-of-type(1)").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".flash:nth-of-type(2)").style.display = "flex";
      setTimeout(() => {
        document.querySelector(".flash:nth-of-type(3)").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".flash:nth-of-type(4)").style.display = "flex";
          setTimeout(() => {
            document.querySelector(".flash:nth-of-type(5)").style.display = "flex";
            setTimeout(() => {
              document.querySelector("#titlescreen p").style.fontSize = "30vh";
              setTimeout(() => {
                document.querySelector(".flash:nth-of-type(5)").style.backgroundColor = colors.black;
                document.querySelector("#titlescreen p").style.color = colors.white;
                setTimeout(() => {
                  for (let i=0; i<5; i++) {
                    let tmp = [colors.beige, colors.red, colors.lavender, colors.buL, colors.black]
                    setTimeout(() => {
                      document.querySelector(".flash:nth-of-type(5)").style.backgroundColor = tmp[i];
                    }, i*810);
                  }
                  setTimeout(() => {
                    document.querySelector("#LAUNCH").style.opacity = "0";
                  }, 5800)
                }, 5800)
              }, 1400)
            }, 2500)
          }, 1600)
        }, 1900)
      }, 2000)
    }, 1800)
  }, 4000);
  
  
}




