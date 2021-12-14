let container = document.querySelector('.container');

for (let i = 0; i < 16; ++i)
{
    for (let j = 0; j < 16; ++j)
    {
        let gridUnit = document.createElement('div');
        gridUnit.className = 'gridUnit';
        gridUnit.addEventListener('mouseenter',() => {
            gridUnit.style.backgroundColor = 'red';
        });
        container.appendChild(gridUnit);
    }
}