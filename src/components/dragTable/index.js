
import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
 
let dragingIndex = -1;
const BodyRow = (props) => {
  const { isOver, connectDragSource, connectDropTarget, moveRow,
    ...restProps } = props;
  const styleY = { ...restProps.style, cursor: 'move' };
  let { className } = restProps;
  if (isOver) {
    if (restProps.index > dragingIndex) {
      className += ' drop-over-downward';
    }
    if (restProps.index < dragingIndex) {
      className += ' drop-over-upward';
    }
  }
  return connectDragSource(
    connectDropTarget(<tr {...restProps} className={className} style={styleY} />),
  );
};
 
const rowSource = {
  beginDrag(props) {
    dragingIndex = props.index;
    return {
      index: props.index,
    };
  },
};
 
const rowTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) {
      return;
    }
    props.moveRow(dragIndex, hoverIndex);
    const mon = monitor.getItem();
    mon.index = hoverIndex;
  },
};
 
const DragableBodyRow = DropTarget('row', rowTarget, (connectIn, monitor) => ({
  connectDropTarget: connectIn.dropTarget(),
  isOver: monitor.isOver(),
  dragingIndex,
}))(
  DragSource('row', rowSource, con => ({
    connectDragSource: con.dragSource(),
  }))(BodyRow),
);
 
 
export const component = {
  body: {
    row: DragableBodyRow,
  },
}