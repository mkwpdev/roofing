if (typeof Swiper !== 'undefined') {
 new Swiper('#workGallery',{slidesPerView:1.2,spaceBetween:20,loop:true,navigation:{nextEl:'#workNext',prevEl:'#workPrev'},breakpoints:{650:{spaceBetween:24}}});
}
const toggle=document.getElementById('mobileToggle');
const nav=document.getElementById('navlinks');
toggle.addEventListener('click',()=>{
 const open=nav.classList.toggle('open');
 toggle.setAttribute('aria-expanded',String(open));
 toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
 nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');
}));
document.getElementById('quickForm').addEventListener('submit',e=>{
 e.preventDefault();
 const form=e.currentTarget;
 document.getElementById('fullName').value=form.elements.name.value.trim();
 document.getElementById('phone').value=form.elements.phone.value.trim();
 document.getElementById('postcode').value=form.elements.postcode.value.trim();
 document.getElementById('contact').scrollIntoView({behavior:'smooth'});
});
document.querySelectorAll('.service-link').forEach(link=>link.addEventListener('click',()=>{
 document.getElementById('service').value=link.dataset.service;
}));
document.querySelectorAll('.quote-form').forEach(form=>form.addEventListener('submit',e=>{
 e.preventDefault();form.querySelector('.form-msg').classList.add('show');
}));
