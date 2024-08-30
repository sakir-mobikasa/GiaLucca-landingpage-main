const styles = document.querySelectorAll('link[data-defer]');
styles.forEach(style => {
  style.media = 'all';
});