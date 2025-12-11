const menu = document.getElementById('menu')

menu.addEventListener('change', (e) => {
    window.location.href = menu.value
})