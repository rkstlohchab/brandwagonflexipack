(function(){
  const products = window.PRODUCTS || [];
  const imageFor = window.PRODUCT_IMAGE;
  const container = document.querySelector('[data-catalog]');
  if(!container) return;

  const filterBar = document.querySelector('[data-filters]');
  const search = document.querySelector('[data-search]');
  const count = document.querySelector('[data-count]');
  let active = 'all';

  const cats = [
    ['all','All products'],['industrial','Industrial films'],['food','Food packaging'],['ecommerce','E-commerce & courier'],['agriculture','Agricultural'],['specialty','Specialty films']
  ];
  if(filterBar){
    filterBar.innerHTML = cats.map(([id,label])=>`<button class="filter-chip ${id==='all'?'active':''}" data-filter="${id}">${label}</button>`).join('');
    filterBar.querySelectorAll('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{
      filterBar.querySelectorAll('.filter-chip').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active'); active = btn.dataset.filter; render();
    }));
  }
  function render(){
    const q=(search?.value||'').trim().toLowerCase();
    const list=products.filter(p=>(active==='all'||p.category===active) && (!q || `${p.name} ${p.short} ${p.uses}`.toLowerCase().includes(q)));
    if(count) count.textContent = `${list.length} ${list.length===1?'product':'products'}`;
    container.innerHTML=list.map(p=>`
      <article class="product-card">
        <a class="product-media" href="product.html?id=${encodeURIComponent(p.id)}" aria-label="Open ${p.name}">
          <img src="${imageFor(p)}" alt="${p.name}" loading="lazy" onerror="this.classList.add('broken');this.parentNode.classList.add('image-fallback')">
          <span class="product-tag">${p.tag}</span>
        </a>
        <div class="product-card-body">
          <h3>${p.name}</h3>
          <p>${p.short}</p>
          <div class="product-card-footer">
            <span class="product-use">${p.uses}</span>
            <a href="product.html?id=${encodeURIComponent(p.id)}">View details <span>↗</span></a>
          </div>
        </div>
      </article>`).join('');
  }
  search?.addEventListener('input', render);
  render();
})();
