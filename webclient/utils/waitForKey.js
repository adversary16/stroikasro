const waitForKey = async (payload, event) => {
  const {
    targetRef,
    keyCode,
    callback,
    preventDefault,
    args,
  } = payload;
  const normalizedKeyCodes = Array.isArray(keyCode) ? keyCode : [keyCode];
  if (normalizedKeyCodes.includes(event.keyCode)) {
    await callback(args);
  }
};

export default waitForKey;
