import lights from './lights.png';

function component() {
    let m = document.createElement('main');
    let p = document.createElement('p');
    let img = document.createElement('img');
    m.append(p)
    p.append(img)
    img.src = lights;
    img.alt = 'sample lights';
    return m;
}

export default component; o01
