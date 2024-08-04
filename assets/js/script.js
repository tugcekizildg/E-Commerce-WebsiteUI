const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
         // Remove active class from all items
        items.forEach(i => i.classList.remove('active'));
        // Add active class to hovered item
        item.classList.add('active'); 
    });

    item.addEventListener('mouseleave', () => {
         // Optionally remove the active class when the mouse leaves
        item.classList.remove('active');
    });
});