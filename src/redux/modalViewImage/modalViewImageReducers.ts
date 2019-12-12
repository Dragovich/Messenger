import { OPEN_MODAL, CLOSE_MODAL } from '../../types/actions';
import { ModalViewImageStore } from '../../types/store';

const initialState: ModalViewImageStore = {
	isOpen: false,
	img: null,
	id: null,
	title: '',
	editable: false
};

export function modalViewImageReducer(state = initialState, action): ModalViewImageStore {
	const { type, payload } = action;
	switch (type) {
	case OPEN_MODAL:
		return {
			isOpen: true,
			img: payload.img,
			id: payload.id,
			title: payload.title,
			editable: payload.editable
		};
	case CLOSE_MODAL:
		return {
			isOpen: false,
			img: null,
			id: null,
			title: '',
			editable: false
		};
	default:
		return state;
	}
}