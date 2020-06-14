class Model {
  constructor() {
    this.tree = {
      tagName: 'div',
      props: {
        id: 'a1',
        style: {
          backgroundColor: '#8fbe00', // greenlike
          width: '100px',
          height: '100px',
        },
      },
      childs: [
        {
          tagName: 'div',
          props: {
            id: 'a2',
            style: {
              backgroundColor: '#ee2100', // redlike
              width: '50px',
              height: '50px',
            },
          },
        },
        {
          tagName: 'div',
          props: {
            id: 'a3',
            style: {
              backgroundColor: '#0b3feb', // bluelike
              width: '25px',
              height: '25px',
            },
          },
        },
      ], // childs
    };
  }

  render() {
    return this.tree;
  }

  renderWithExtra(extra) {
    const { childs } = this.tree;
    childs.push(extra);
    return this.tree;
  }
}

const editorModel = new Model();

export default editorModel;
