import './mermaidZoom.css';
import panzoom from '@panzoom/panzoom';

// 等待mermaid全部渲染完毕
function waitMermaidRender() {
  return new Promise((resolve) => {
    const timer = setInterval(() => {
      const svgs = document.querySelectorAll('.docusaurus-mermaid-container svg');
      if (svgs.length > 0) {
        clearInterval(timer);
        resolve(svgs);
      }
    }, 200);
  });
}

async function bindZoom() {
  const svgList = await waitMermaidRender();

  svgList.forEach((svg) => {
    const container = svg.parentElement;
    // 防止重复绑定
    if (container.dataset.zoomBind === '1') return;
    container.dataset.zoomBind = '1';

    container.style.cursor = 'zoom-in';
    container.title = '点击全屏查看大图，滚轮缩放、拖拽平移';

    container.onclick = () => {
      // 遮罩层
      const mask = document.createElement('div');
      mask.className = 'mermaid-zoom-mask';

      const wrap = document.createElement('div');
      wrap.className = 'mermaid-zoom-box';

      const svgClone = svg.cloneNode(true);
      wrap.appendChild(svgClone);

      // 关闭按钮
      const closeBtn = document.createElement('button');
      closeBtn.innerText = '关闭 [ESC]';
      closeBtn.className = 'mermaid-close';

      mask.appendChild(closeBtn);
      mask.appendChild(wrap);
      document.body.appendChild(mask);

      // 初始化缩放拖拽
      panzoom(svgClone, {
        minZoom: 0.1,
        maxZoom: 10,
        smoothScroll: true,
        bounds: false
      });

      // 关闭逻辑
      const close = () => mask.remove();
      closeBtn.onclick = close;
      mask.addEventListener('click', (e) => {
        if (e.target === mask) close();
      });
      const escHandler = (e) => {
        if (e.key === 'Escape') {
          close();
          window.removeEventListener('keydown', escHandler);
        }
      };
      window.addEventListener('keydown', escHandler);
    };
  });
}

// 页面初次加载 + 路由切换后都执行
window.addEventListener('load', bindZoom);
window.addEventListener('docusaurus.routeDidUpdate', bindZoom);