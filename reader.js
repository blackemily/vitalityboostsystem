document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll('a[href="chapter-21.html"],a[href="chapter-22.html"]').forEach(function(a){a.remove();});
  document.querySelectorAll('.mobile-links a[href="chapter-19.html"]').forEach(function(a){a.textContent="19 · Evidence, Safety, and Medication Interactions";});
  document.querySelectorAll('.mobile-links a[href="chapter-20.html"]').forEach(function(a){a.textContent="20 · A Daily Vitality Plan and an Informed Product Decision";});
  document.querySelectorAll('.side-link[href="chapter-19.html"]').forEach(function(a){a.innerHTML="<span>19</span>Evidence, Safety, and Medication Interactions";});
  document.querySelectorAll('.side-link[href="chapter-20.html"]').forEach(function(a){a.innerHTML="<span>20</span>A Daily Vitality Plan and an Informed Product Decision";});
  var path=window.location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll(".side-link").forEach(function(a){a.classList.toggle("active",a.getAttribute("href")===path);});
  document.querySelectorAll(".mobile-links a").forEach(function(a){a.addEventListener("click",function(){var d=a.closest("details");if(d)d.open=false;});});
});