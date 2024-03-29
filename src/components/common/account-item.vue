<template lang="pug">
q-card(:flat="flat" :class="{'inherit': inherit}" :bordered="bordered")
  q-item
    q-item-section(avatar)
      account-icon(:address="address" size="2em")
    q-item-section
      q-item-label(lines="1") {{ displayName }}
    slot
</template>

<script>
import AccountIcon from '~/components/common/account-icon.vue'
import { mapGetters } from 'vuex'

/**
 * Component used to show user info (using polkadot address)
 */
export default {
  name: 'AccountItem',
  components: { AccountIcon },
  props: {
    /**
     * Polkadot user address
     */
    address: {
      type: String,
      default: undefined
    },
    flat: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    displayNameClass: {
      type: String,
      default: ''
    },
    inherit: {
      type: Boolean,
      default: false
    },
    shortDisplay: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      accountInfo: undefined
    }
  },
  computed: {
    ...mapGetters('polkadotWallet', ['availableAccounts']),
    displayName () {
      if (this.accountInfo) {
        const identity = this.accountInfo?.identity
        const localDisplay = this.availableAccounts.find(v => v.address === this.address)
        return (identity.display) ? identity.display : localDisplay?.meta?.name || this.getAddress(this.address)
      } return undefined
    }
  },
  watch: {
    address () {
      if (this.address) this.getAccountInfo()
    }
  },
  beforeMount () {
    if (this.address) {
      this.getAccountInfo()
    }
  },
  methods: {
    async getAccountInfo () {
      try {
        this.accountInfo = await this.$store.$polkadotApi.getAccountInfo(this.address)
      } catch (e) {
        console.error('error', e)
        this.showNotification({ message: e.message || e, color: 'negative' })
      }
    },
    getAddress (address) {
      if (this.shortDisplay) {
        return address.substr(0, 4) + '...' + address.substr(-5)
      }
      return address
    }
  }
}
</script>

<style lang="stylus" scoped>
.inherit
  background-color: inherit
</style>
