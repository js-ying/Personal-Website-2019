// auto-initialize ripple effect for elements with class `liquid-glass-button`
// usage: import initRipple from './utils/ripple'; initRipple();

export default function initRipple(options = {}) {
  const defaultColor = options.color || 'rgba(235,240,255,0.18)';

  function createRippleOn(el, x, y, color) {
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2; // ensure covers corners

    const span = document.createElement('span');
    span.className = 'ripple';
    span.style.width = `${size}px`;
    span.style.height = `${size}px`;
    span.style.left = `${x - size / 2}px`;
    span.style.top = `${y - size / 2}px`;
    span.style.backgroundColor = color || defaultColor;

    el.appendChild(span);

    function remove() {
      if (span && span.parentNode) {
        span.parentNode.removeChild(span);
      }
    }

    span.addEventListener('animationend', remove);
    // safety remove in case animationend doesn't fire
    setTimeout(remove, 800);
  }

  function onPointerDown(e) {
    const el = e.target.closest && e.target.closest('.liquid-glass-button');
    if (!el) return;

    // ensure host has correct containment styles
    const st = window.getComputedStyle(el);
    if (st.position === 'static') {
      el.style.position = 'relative';
    }
    if (st.overflow !== 'hidden') {
      el.style.overflow = 'hidden';
    }

    const rect = el.getBoundingClientRect();
    let x;
    let y;
    if (e.touches && e.touches.length) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else if (typeof e.clientX === 'number') {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    } else {
      x = rect.width / 2;
      y = rect.height / 2;
    }

    createRippleOn(el, x, y, options.color);
  }

  function onKeyDown(e) {
    if (e.key !== ' ' && e.key !== 'Enter') return;
    const active = document.activeElement;
    // eslint-disable-next-line operator-linebreak
    const el =
      active && active.classList && active.classList.contains('liquid-glass-button')
        ? active
        : active && active.closest && active.closest('.liquid-glass-button');
    if (!el) return;
    const rect = el.getBoundingClientRect();
    createRippleOn(el, rect.width / 2, rect.height / 2, options.color);
  }

  document.addEventListener('pointerdown', onPointerDown, { passive: true });
  document.addEventListener('touchstart', onPointerDown, { passive: true });
  document.addEventListener('keydown', onKeyDown);

  return function destroy() {
    document.removeEventListener('pointerdown', onPointerDown);
    document.removeEventListener('touchstart', onPointerDown);
    document.removeEventListener('keydown', onKeyDown);
  };
}
