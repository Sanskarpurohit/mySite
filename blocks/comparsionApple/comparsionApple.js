const rows = document.querySelector('.comparisonApple').children;

Array.from(rows).forEach((row) => {

  row.classList.add('comparison-row');

  const [label, left, right] = row.children;

  label.classList.add('feature-label');   // Always static: "Model", "Display", etc.

  left.classList.add('product-left');     // Dynamic value: iPhone 15, iPhone 12, etc.

  right.classList.add('product-right');   // Dynamic value: iPhone 16, iPhone 17, etc.

});
 
