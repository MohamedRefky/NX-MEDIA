document.documentElement.classList.add("js");(function(){var e=document.querySelector(".rv");if(!e)return;if(!("IntersectionObserver" in window)){e.classList.add("in");return}var o=new IntersectionObserver(function(a){if(a[0].isIntersecting){e.classList.add("in");o.disconnect()}},{threshold:.15});o.observe(e)})()

(function(){var P={Basic:40,Professional:80,Premium:150},$=function(i){return document.getElementById(i)};
function pkg(){return document.querySelector('input[name=pkg]:checked').value}
function n(){return Math.max(1,parseInt($('ct').value,10)||1)}
function upd(){var k=pkg(),c=n();$('tot').textContent=k==='Custom'?'Custom quote':'$'+(P[k]*c)}
function err(id,msg){var e=$('e-'+id),i=$(id);e.textContent=msg||'';var box=(id==='ct'&&$('st-ct'))?$('st-ct'):i;if(msg){box.classList.add('bad');i.setAttribute('aria-invalid','true')}else{box.classList.remove('bad');i.removeAttribute('aria-invalid')}}
document.querySelectorAll('input[name=pkg]').forEach(function(r){r.addEventListener('change',upd)});
$('ct').addEventListener('input',upd);
if($('ct-inc')){$('ct-inc').addEventListener('click',function(){var v=n();$('ct').value=v+1;err('ct','');upd()})};
if($('ct-dec')){$('ct-dec').addEventListener('click',function(){var v=n();if(v>1){$('ct').value=v-1;err('ct','');upd()}})};
['nm','ct','fl'].forEach(function(id){$(id).addEventListener('input',function(){err(id,'')})});
document.querySelectorAll('[data-pkg]').forEach(function(a){a.addEventListener('click',function(){var r=document.querySelector('input[name=pkg][value='+a.dataset.pkg+']');if(r){r.checked=true;upd()}})});
$('go').addEventListener('click',function(){var nm=$('nm').value.trim(),k=pkg(),fl=$('fl').value.trim(),nt=$('nt').value.trim(),first=null;
if(!nm){err('nm','Please enter your name.');first=first||'nm'}
if(!(parseInt($('ct').value,10)>=1)){err('ct','Enter at least 1 video.');first=first||'ct'}
if(fl&&!/^https?:\/\/\S+$/i.test(fl)){err('fl','The link should start with https://');first=first||'fl'}
if(first){$(first).focus();return}
var c=n(),pr=k==='Custom'?'Custom (50+ videos per month)':k+' ($'+P[k]+'/video)';
var m='Hi NX Media, I would like to order a video edit.\n\nName: '+nm+'\nPackage: '+pr+'\nNumber of videos: '+c+'\nEstimated total: '+$('tot').textContent+'\nFootage link: '+(fl||'I will send it in the chat')+(nt?'\nNotes: '+nt:'');
var u='https://wa.me/201060956959?text='+encodeURIComponent(m),b=$('go'),s=$('st');
s.textContent='Opening WhatsApp… ';var a=document.createElement('a');a.href=u;a.target='_blank';a.rel='noopener';a.textContent='Didn’t open? Tap here';s.appendChild(a);
b.disabled=true;b.textContent='Opening WhatsApp…';
setTimeout(function(){b.disabled=false;b.textContent='Send order on WhatsApp'},4000);
if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){window.location.href=u}else{window.open(u,'_blank','noopener')}});
upd()})();
(function(){var b=document.getElementById('mb'),p=document.getElementById('mp');
function c(){p.hidden=true;b.setAttribute('aria-expanded','false')}
b.addEventListener('click',function(e){e.stopPropagation();var o=p.hidden;p.hidden=!o;b.setAttribute('aria-expanded',o?'true':'false')});
document.addEventListener('click',function(e){if(!p.contains(e.target)&&e.target!==b)c()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')c()});
window.addEventListener('resize',function(){if(window.innerWidth>900)c()})})();
document.querySelectorAll('.work video').forEach(function(v){v.addEventListener('play',function(){document.querySelectorAll('.work video').forEach(function(o){if(o!==v&&!o.paused)o.pause()})})});

(function(){var ids=['about','process','work','pricing','order','faq','contact'],links=document.querySelectorAll('nav .links a,#mp a'),vis={},lock=0,tk=0;
function set(id){links.forEach(function(a){var on=a.getAttribute('href')==='#'+id;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')})}
function calc(){if(Date.now()<lock)return;var cur='';ids.forEach(function(i){if(vis[i])cur=i});
if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-6)cur='contact';set(cur)}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){vis[e.target.id]=e.isIntersecting});calc()},{rootMargin:'-35% 0px -60% 0px'});
ids.forEach(function(i){var el=document.getElementById(i);if(el)io.observe(el)})}
window.addEventListener('scroll',function(){if(tk)return;tk=requestAnimationFrame(function(){tk=0;calc()})},{passive:true});
links.forEach(function(a){a.addEventListener('click',function(){lock=Date.now()+900;set(a.getAttribute('href').slice(1));setTimeout(calc,950)})});
calc()})();

(function(){var s=document.querySelector('.sticky'),ids=['order','contact'],v={};if(!s||!('IntersectionObserver' in window))return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){v[e.target.id]=e.isIntersecting});s.classList.toggle('off',!!(v.order||v.contact))},{rootMargin:'0px 0px -25% 0px'});
ids.forEach(function(i){var el=document.getElementById(i);if(el)io.observe(el)})})();