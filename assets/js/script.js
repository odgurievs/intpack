document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('[data-scroll]').forEach(function(link){
    link.addEventListener('click', function(e){
      const href = link.getAttribute('href');
      if(href && href.startsWith('#')){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });

  const year = document.querySelector('[data-year]');
  if(year){ year.textContent = new Date().getFullYear(); }
});
