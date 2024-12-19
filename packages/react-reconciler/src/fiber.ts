import { Key, Props, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';

// fiberNode - dfs 深度优先遍历
export class FiberNode {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	type: any;
	tag: WorkTag;
	pendingProps: Props;
	key: Key;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	stateNode: any;
	ref: Ref;

	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;

	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	memoizedProps: Props | null;
	alternate: FiberNode | null;
	flags: Flags;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		// 实例
		this.tag = tag;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.key = key;
		// HostCompoent <div> 对应的 div DOM
		this.stateNode = null;
		// FunctionCompoent 里的 () => {}
		this.type = null;

		// 构成树状结构
		// 指向父 fiberNode
		this.return = null;
		// 同级的 fiberNode
		this.sibling = null;
		//  子 fiberNode
		this.child = null;
		// <ul>li * 3</ul> 则 index = 3
		this.index = 0;

		this.ref = null;

		// 作为工作单元
		// 工作前
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.pendingProps = pendingProps;
		// 工作后
		this.memoizedProps = null;

		this.alternate = null;
		// 副作用
		this.flags = NoFlags;
	}
}
