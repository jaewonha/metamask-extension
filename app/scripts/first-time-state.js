/**
 * @typedef {Object} FirstTimeState
 * @property {Object} config Initial configuration parameters
 * @property {Object} NetworkController Network controller state
 */

/**
 * @type {FirstTimeState}
 */
const initialState = {
  config: {},
  PreferencesController: {
    frequentRpcListDetail: [
      {
        rpcUrl: 'http://52.79.249.152:8545',
        chainId: '0x12',
        ticker: 'MDM',
        nickname: 'MDM Besu',
        rpcPrefs: {},
      },
    ],
  },
};

export default initialState;
