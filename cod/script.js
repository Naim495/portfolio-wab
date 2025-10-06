// Small animation for floating tags
document.querySelectorAll('.tag').forEach(tag => {
    const randomX = Math.random() * 30 - 15;
    const randomY = Math.random() * 30 - 15;
    tag.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
  