import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Type,
	Key,
	Ref,
	Props,
	ReactElement,
	ElementType
} from 'shared/ReactTypes';

// ReactElement

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		type,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		key,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		ref,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		props,
		__mark: 'Susu'
	};
	return element;
};
// <div id='xxx'> 123 </div>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const jsx = (type: ElementType, config: any, ...maybeChlidren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in props) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop == 'ref') {
			if (val !== undefined) {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				ref = val;
			}
			continue;
		}

		if ({}.hasOwnProperty.call(config, prop)) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
			props[prop] = val;
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
	const maybeChlidrenLength = maybeChlidren.length;

	if (maybeChlidrenLength) {
		if (maybeChlidrenLength === 1) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
			props.children = maybeChlidren[0];
		} else {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
			props.children = maybeChlidren;
		}
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDEV = jsx;
