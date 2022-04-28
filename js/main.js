/* ham */
const box = document.getElementById('ham-box')

function hamburger(){
  box.addEventListener('click', function(){
    document.getElementById('ham-content').classList.toggle('slide');
  });
};
hamburger();
box.addEventListener('click', function(){
  document.getElementById('line_1').classList.toggle('line__1');
});
box.addEventListener('click', function(){
  document.getElementById('line_2').classList.toggle('line__2');
});
box.addEventListener('click', function(){
  document.getElementById('line_3').classList.toggle('line__3');
});
