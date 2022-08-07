const swup = new Swup()

navigations = ['nav_home', 'nav_skills', 'nav_portfolio']
nav_pos = 0

document.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
        nav_pos = Math.max(nav_pos - 1, 0)
    }
    else if (e.deltaY > 0) {
        nav_pos = Math.min(nav_pos + 1, navigations.length - 1)
    }
    document.getElementById(navigations[nav_pos]).click();
})