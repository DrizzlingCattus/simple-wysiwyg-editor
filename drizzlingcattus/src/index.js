import editorModel from './models/editor';

const root = document.getElementById('root');

function applyStyleProps(node, styleObject) {
  const stylePropsList = Object.entries(styleObject);
  const { style } = node;

  stylePropsList.forEach(([styleName, styleValue]) => {
    style[styleName] = styleValue;
  });
}

function applyProps(node, props) {
  const propsList = Object.entries(props);
  propsList.forEach(([propName, propValue]) => {
    if (propName === 'style') {
      applyStyleProps(node, propValue);
    } else {
      // TODO: check, is vaild property name
      node.setAttribute(propName, propValue);
    }
  });
}

const VDOM_PREFIX = 'vdom';
const vdom = {
  icount: 0,

  createElement(vnode = {}) {
    const { tagName, props, childs = [] } = vnode;

    const node = document.createElement(tagName);
    // for node identification
    node.classList.add(`${VDOM_PREFIX}-${vdom.icount}`);
    applyProps(node, props);
    vdom.icount += 1;

    childs.forEach((child) => {
      if (child) {
        const childNode = vdom.createElement(child);
        node.appendChild(childNode);
      }
    });

    return node;
  },

  diff(oldVNode, newVNode) {
    // TODO
    return `${oldVNode} ${newVNode}`;
  },

  patch(vnode, patches) {
    // TODO
    return `${vnode} ${patches}`;
  },
};

const vtree = editorModel.render();
console.log('vtree is', vtree);

const editorNode = vdom.createElement(vtree);
console.log('editorNode is', editorNode);

root.appendChild(editorNode);

const nextVTree = editorModel.renderWithExtra({
  tagName: 'div',
  props: {
    style: {
      backgroundColor: '#000000', // black
      width: '20px',
      height: '20px',
    },
  },
});

const patches = vdom.diff(vtree, nextVTree);
console.log('patches is', patches);

const nextEditorNode = vdom.patch(editorNode, patches);
console.log(nextEditorNode);
