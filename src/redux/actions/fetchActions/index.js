export const handleFetch = (func, data) => async (dispatch) => {
	let result = await func(data);

	return dispatch(result);
};
