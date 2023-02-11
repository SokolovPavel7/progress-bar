const createElements = () => {
  const root = document.createElement('div');
  const text = document.createElement('div');
  const container = document.createElement('div');
  const load = document.createElement('div');

  return { root, text, container, load };
};

const setAttribute = ({ root, text, container, load }) => {
  root.classList.add('root');
  text.classList.add('text');
  container.classList.add('container');
  load.classList.add('load');
};

/*функия запуска динамического изменения*/
const startCounting = ({ width, load, text, interval }) => {
  let count = 0;
  let intervalId;

  const func = () => {
    if (count === width) {
      clearInterval(intervalId);
    }

    text.textContent = `${count}%`;
    load.style.width = `${count}%`;
    count++;
  };

  intervalId = setInterval(func, interval);
};

const init = () => {
  const { root, text, container, load } = createElements();
  setAttribute({ root, text, container, load });

  document.body.appendChild(root);
  root.appendChild(text);
  root.appendChild(container);
  container.appendChild(load);

  startCounting({ width: 85, text, load, interval: 50 });
};

init();
