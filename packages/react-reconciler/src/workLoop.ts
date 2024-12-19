import { beginWork } from './beginWork';
import { completeWork } from './completeWork';
import { FiberNode } from './fiber';

let workInProgress: FiberNode | null = null;

function prepareFreshStack(fiber: FiberNode) {
	workInProgress = fiber;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function renderRoot(root: FiberNode) {
	// 初始化
	prepareFreshStack(root);

	do {
		try {
			workLoop();
			break;
		} catch (error) {
			// 处理错误
			workInProgress = null;
			console.warn('workLoop 发生错误', error);
		}
		// eslint-disable-next-line no-constant-condition
	} while (true);
}

function workLoop() {
	while (workInProgress !== null) {
		performUnitOfWork(workInProgress);
	}
}

function performUnitOfWork(fiber: FiberNode) {
	const next = beginWork(fiber);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	fiber.memoizedProps = fiber.pendingProps;
	// 遍历到最后
	if (next === null) {
		completeUnitOfWork(fiber);
	} else {
		workInProgress = next;
	}
}

function completeUnitOfWork(fiber: FiberNode) {
	let node: FiberNode | null = fiber;

	do {
		completeWork(node);
		const sibling = node.sibling;

		if (sibling !== null) {
			workInProgress = sibling;
			return;
		}
		node = node.return;
		workInProgress = node;
	} while (node !== null);
}
