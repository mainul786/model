const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModel = document.querySelector('.close-modal');
const showModel = document.querySelectorAll('.show-modal');


const openModal = function () {
  console.log('clicked');
  // modal.style.display ='block';
  modal.classList.remove('hidden');
 overlay.classList.remove('hidden');
 }
for (let i = 0; i<showModel.length; i++)

  showModel[i].addEventListener('click', openModal);
  
const close = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

  closeModel.addEventListener('click', close);
  overlay.addEventListener('click', close);

document.addEventListener('keydown', function(e){
  console.log(e.key);
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
      close();
    }
})