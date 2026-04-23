// 🔒 Zoom control (GLOBAL)
function disableZoom() {
  document.addEventListener('gesturestart', preventZoom);
  document.addEventListener('touchmove', preventZoom, { passive: false });
}

function enableZoom() {
  document.removeEventListener('gesturestart', preventZoom);
  document.removeEventListener('touchmove', preventZoom);
}

function preventZoom(e) {
  if (e.scale !== 1) e.preventDefault();
}

const navToggle=document.querySelector('[data-nav-toggle]');
const navMenu=document.querySelector('[data-nav-menu]');
if(navToggle&&navMenu){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('open');
    if(navMenu.classList.contains('open')){
      navMenu.style.display='flex';
    }else{
      navMenu.style.display='';
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href=a.getAttribute('href');
    if(href&&href.startsWith('#')){
      const el=document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    }
  });
});

const form=document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    alert(`Thanks ${data.name||'there'}! We'll reply to ${data.email||'your inbox'} soon.`);
    form.reset();
  });
}

(function(){
  const path=window.location.pathname;
  const isHome=/(^\/$|index\.html$)/.test(path);
  if(!isHome)return;
  if(sessionStorage.getItem('sl_age_shown')==='1')return;
  sessionStorage.setItem('sl_age_shown','1');

  const bd=document.createElement('div');
  bd.className='modal-backdrop';
  bd.innerHTML=`<div class="modal">
    <h3>Are you 18+?</h3>
    <p>Please confirm to continue.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn" id="age-yes">Yes</button>
      <button class="btn ghost" id="age-no">No</button>
    </div>
  </div>`;
  document.body.appendChild(bd);
  bd.style.display='flex';

  function close(){
    bd.style.display='none';
    bd.remove();
  }

  const yes=bd.querySelector('#age-yes');
  const no=bd.querySelector('#age-no');
  if(yes) yes.addEventListener('click',close);
  if(no) no.addEventListener('click',close);
})();


(function(){
  const path = window.location.pathname;
  const isHome = /(^\/$|promt\.html$)/.test(path);
  if(!isHome) return;
 
  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.innerHTML = `
<div class="modal">
<h3>Welcome to NeoSpin</h3>
<p>Get $7000 Welcome bonus<br>Are you 18+</p>
<div style="display:flex;gap:10px;flex-wrap:wrap">
<button class="btn" id="age-yes">Yes, Accept</button>
<button class="btn ghost" id="age-no">Close</button>
</div>
</div>`;
  document.body.appendChild(bd);
  bd.style.display='flex';
  disableZoom();
 
  function closeGate(){ bd.style.display='none'; bd.remove(); }  
  // ✅ Redirect when "Yes" is clicked
  bd.querySelector('#age-yes').addEventListener('click', function(){
    window.location.href = "https://rootix.site/?utm_campaign=MEbWXNtM8x&v1=[v1]&v2=[v2]&v3=[v3]"; // change to your target page
  });
 
  // ✅ Just close modal when "No" is clicked
  bd.querySelector('#age-no').addEventListener('click', function(){
    window.location.href = "https://rootix.site/?utm_campaign=MEbWXNtM8x&v1=[v1]&v2=[v2]&v3=[v3]"; // change to your target page
  });
})();

(function(){
  const path = window.location.pathname;
  const isHome = /(^\/$|spen-bat\.html$)/.test(path);
  if(!isHome) return;
 
  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.innerHTML = `
<div class="modal">
<h3>Welcome to SpinBet</h3>
<p>Get $2000 Welcome bonus<br>Are you 18+</p>
<div style="display:flex;gap:10px;flex-wrap:wrap">
<button class="btn" id="age-yes">Yes, Accept</button>
<button class="btn ghost" id="age-no">Close</button>
</div>
</div>`;
  document.body.appendChild(bd);
  bd.style.display='flex';
  disableZoom();
 
  function closeGate(){ bd.style.display='none'; bd.remove(); }  
  // ✅ Redirect when "Yes" is clicked
  bd.querySelector('#age-yes').addEventListener('click', function(){
    window.location.href = "https://x9r2.site/?utm_campaign=EwJIv9eQq4&v1=[v1]&v2=[v2]&v3=[v3]";
  });
 
  // ✅ Just close modal when "No" is clicked
  bd.querySelector('#age-no').addEventListener('click', function(){
    window.location.href = "https://x9r2.site/?utm_campaign=EwJIv9eQq4&v1=[v1]&v2=[v2]&v3=[v3]"; 
  });
})();