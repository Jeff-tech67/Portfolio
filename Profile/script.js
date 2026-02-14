// Small interactive helpers: reveal on scroll, contact button, subtle parallax for blobs
(function(){
  // set year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // reveal on scroll
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('in-view');
      });
    },{threshold:0.12});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));
  }

  // contact button
  const contactBtn = document.getElementById('contactBtn');
  if(contactBtn){
    contactBtn.addEventListener('click',()=>{
      const target = document.getElementById('contact');
      if(target) target.scrollIntoView({behavior:'smooth',block:'center'});
    });
  }

  // small parallax for blobs based on pointer
  const blobs = document.querySelectorAll('.blob');
  if(blobs.length){
    window.addEventListener('pointermove',(e)=>{
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      blobs.forEach((b,i)=>{
        const depth = (i+1) * 6;
        b.style.transform = `translate3d(${x/depth}px, ${y/depth}px, 0) rotate(${x/depth}deg)`;
      });
    });
  }

})();
