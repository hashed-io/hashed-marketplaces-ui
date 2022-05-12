import PolkadotApi from '~/services/polkadotApi.js'
export const connectToServer = async function ({ commit }, wssUrl) {
  try {
    const api = new PolkadotApi({ wss: wssUrl })
    commit('setApi', api)
    return api.connect()
  } catch (e) {
    throw new Error(e)
  }
}
