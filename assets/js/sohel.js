  $(window).scroll(function() { $(this).scrollTop() > 50 ? ($("nav").addClass("nav_scroll")) : ($("nav").removeClass("nav_scroll"), $("nav").removeClass("nav_scroll")) }), $(document).ready(function(r) { r(window).bind("load", function() { r("#preloader, body").addClass("loaded"), setTimeout(function() { r("#preloader").css({ opacity: "0", visibility: "hidden", transition: ".3s" }) }, 2e3) }), setTimeout(function() { r("#preloader, body").addClass("loaded") }, 6e4) }), AOS.init({ duration: 1e3 });
  const cursor = document.querySelector("#cursor"),
      cursorBorder = document.querySelector("#cursor-border"),
      cursorPos = { x: 0, y: 0 },
      cursorBorderPos = { x: 0, y: 0 };
  document.addEventListener("mousemove", r => { cursorPos.x = r.clientX, cursorPos.y = r.clientY, cursor.style.transform = `translate(${r.clientX}px, ${r.clientY}px)` }), requestAnimationFrame(function r() { cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / 8, cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / 8, cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`, requestAnimationFrame(r) }), document.querySelectorAll("[data-cursor]").forEach(r => { r.addEventListener("mouseover", e => { "pointer" === r.dataset.cursor && (cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)", cursorBorder.style.setProperty("--size", "50px")), "pointer2" === r.dataset.cursor && (cursorBorder.style.backgroundColor = "white", cursorBorder.style.mixBlendMode = "difference", cursorBorder.style.setProperty("--size", "50px")) }), r.addEventListener("mouseout", r => { cursorBorder.style.backgroundColor = "unset", cursorBorder.style.mixBlendMode = "unset", cursorBorder.style.setProperty("--size", "30px") }) });
  const video = document.getElementById("video_shot"),
      circlePlayButton = document.getElementById("circle-play-b");

  function togglePlay() { video.paused || video.ended ? video.play() : video.pause() }
  circlePlayButton.addEventListener("click", togglePlay), video.addEventListener("playing", function() { circlePlayButton.style.opacity = 0 }), video.addEventListener("pause", function() { circlePlayButton.style.opacity = 1 })

  /*
    <section>
      <div class="container">
          <div class="row">
              <div class="col-lg-6">
                  
              </div>
          </div>
      </div>
  </section>
  */