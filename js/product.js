(function(){
  const id=new URLSearchParams(location.search).get('id') || 'anti-static-polyfilm';
  const p=(window.PRODUCTS||[]).find(x=>x.id===id) || window.PRODUCTS?.[0];
  if(!p) return;
  const image=window.PRODUCT_IMAGE(p);
  document.title=`${p.name} | Brandwagon Flexipack`;
  document.querySelector('[data-product-image]').src=image;
  document.querySelector('[data-product-image]').alt=p.name;
  document.querySelector('[data-product-tag]').textContent=p.tag;
  document.querySelector('[data-product-name]').textContent=p.name;
  document.querySelector('[data-product-description]').textContent=p.description;
  document.querySelector('[data-product-uses]').textContent=p.uses;
  document.querySelector('[data-features]').innerHTML=p.features.map(f=>`<li>${f}</li>`).join('');
  document.querySelector('[data-quote-link]').href=`mailto:${window.BRANDWAGON.email}?subject=${encodeURIComponent('Product enquiry: '+p.name)}`;
  const related=(window.PRODUCTS||[]).filter(x=>x.id!==p.id && (x.category===p.category || x.tag===p.tag)).slice(0,3);
  document.querySelector('[data-related]').innerHTML=related.map(r=>`<a class="related-card" href="product.html?id=${r.id}"><img src="${window.PRODUCT_IMAGE(r)}" alt="${r.name}" loading="lazy"><span>${r.name}</span></a>`).join('');
})();
