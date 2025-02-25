const categories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const name = category.querySelector('.item h2').textContent;
  const quantity = category.querySelectorAll('.item ul li').length;

  console.log('Category:', name);
  console.log('Elements:', quantity);
});
