export type WorkTag =
	| typeof FunctionComponent
	| typeof HostRoot
	| typeof HostComponent
	| typeof HostText;

export const FunctionComponent = 0;
export const HostRoot = 3;
// <div> 对应的 fiberNode
export const HostComponent = 5;
// <div> xxx </div> 中的 xxx 对应的 fiberNode
export const HostText = 6;
