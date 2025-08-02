function toggleSeeMore(listId) {
  const list = document.getElementById(listId);
  if (!list) return;

  const hiddenItems = list.querySelectorAll('.extra');
  const seeAllLink = list.querySelector('#see-all a');

  hiddenItems.forEach(item => {
    item.classList.toggle('hidden');
  });

  // Toggle link text
  seeAllLink.textContent = seeAllLink.textContent === 'See all' ? 'See less' : 'See all';
}
