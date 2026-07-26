function toggleCode(element) {
      const wrapper = element.closest('.code-block-wrapper');
      const content = wrapper.querySelector('.code-content');
      content.classList.toggle('open');
      element.classList.toggle('active');
    }

    function togglePanel(element) {
      element.closest('.tech-panel').classList.toggle('open');
    }

    const progressBar = document.getElementById('progressBar');
    const backToTop = document.getElementById('backToTop');

    function updateProgress() {
      const sh = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (window.scrollY / sh * 100) + '%';
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }
    window.addEventListener('scroll', updateProgress, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.01, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll('section').forEach(s => {
      observer.observe(s);
      const r = s.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) s.classList.add('visible');
    });

    document.addEventListener('DOMContentLoaded', function() {
      if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
          startOnLoad: true, theme: 'dark',
          themeVariables: {
            primaryColor: '#1c2640', primaryTextColor: '#eef1f8', primaryBorderColor: '#4a9eff',
            lineColor: '#8b95a8', secondaryColor: '#121829', tertiaryColor: '#0a0e1a',
            fontFamily: 'InstrumentSans, sans-serif'
          },
          flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' },
          sequence: { useMaxWidth: true }
        });
      }
      updateProgress();
    });