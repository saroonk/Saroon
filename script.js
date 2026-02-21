document.addEventListener('DOMContentLoaded', () => {


  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const pane = document.getElementById(btn.dataset.tab);
      if (pane) { pane.classList.add('active'); triggerReveal(); }
    });
  });


  // document.addEventListener('click', (e) => {
  //   const btn = e.target.closest('.like-btn');
  //   if (!btn) return;
  //   const isActive = btn.classList.toggle('active');
  //   const span = btn.querySelector('span');
  //   const svg = btn.querySelector('svg');
  //   const n = parseInt(span.textContent) || 0;
  //   span.textContent = isActive ? n + 1 : Math.max(0, n - 1);
  //   svg.classList.add('heart-pop');
  //   svg.addEventListener('animationend', () => svg.classList.remove('heart-pop'), { once: true });
  // });


  // function triggerReveal() {
  //   const io = new IntersectionObserver((entries, obs) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('visible');
  //         obs.unobserve(entry.target);
  //       }
  //     });
  //   }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  //   document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
  // }
  // triggerReveal();




  document.querySelectorAll('.btn-download-resume').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Only intercept if resume.pdf doesn't exist yet
      // Remove the line below and it'll just download normally
      showToast('Resume download started!');
    });
  });


  function showToast(msg) {
    let t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      Object.assign(t.style, {
        position: 'fixed', bottom: '28px', left: '50%',
        transform: 'translateX(-50%) translateY(16px)',
        background: '#1d9bf0', color: '#fff',
        padding: '10px 22px', borderRadius: '9999px',
        fontSize: '14px', fontWeight: '600',
        fontFamily: 'Inter,sans-serif',
        zIndex: '9999', opacity: '0',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: 'none',
        boxShadow: '0 4px 20px rgba(29,155,240,0.4)',
        whiteSpace: 'nowrap',
      });
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(t._tid);
    t._tid = setTimeout(() => {
      t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(16px)';
    }, 2600);
  }

});
