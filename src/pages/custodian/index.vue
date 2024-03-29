<template lang='pug'>
#container
  applicants-list(:applicants="applicants" :showActions="showActions")
</template>
<script>
import ApplicantsList from 'src/components/marketplace/applicants-list.vue'
import { authentication } from 'src/mixins/authentication'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CustodianIndex',
  components: {
    ApplicantsList
  },
  mixins: [authentication],
  data () {
    return {
      applicants: undefined,
      showActions: false
    }
  },
  computed: {
    ...mapState('polkadotWallet', ['selectedAccount'])
  },
  watch: {
    'selectedAccount.address': {
      async handler () {
        this.applicants = []
        const isLoggedIn = await this.$store.$hashedPrivateApi.isLoggedIn()
        if (!isLoggedIn) {
          await this.loginUser()
        }
        await this.getApplications()
      }
    }
  },
  beforeMount () {
    this.getApplications()
  },
  methods: {
    ...mapMutations('polkadotWallet', ['setIsLoggedIn']),
    async getApplications () {
      try {
        this.showLoading({ message: 'Getting applications where you are custodian' })
        const response = await this.$store.$marketplaceApi.getApplicationsByCustodian({
          account: this.selectedAccount.address
        })
        const applicantsHP = await this.getFromHP(response)
        this.applicants = applicantsHP
      } catch (error) {
        console.log(error)
        this.showNotification({ message: error.message || error, color: 'negative' })
      } finally {
        this.hideLoading()
      }
    },
    async getFromHP (applicants) {
      console.log('applicants', applicants)
      const promisesFields = []
      const tmpApplicants = applicants.filter(applicant => {
        return applicant.fields[0].custodianCid !== null
      })
      const isLogged = await this.$store.$hashedPrivateApi.isLoggedIn()
      this.setIsLoggedIn(isLogged)
      if (!isLogged) {
        await this.loginUser()
      }
      tmpApplicants.forEach((applicant, indexApplicant) => {
        applicant.fields.forEach(privateFields => {
          const identifier = 'File:'
          let cid = privateFields.displayName.includes(identifier)
            ? privateFields.custodianCid.split(':')[0]
            : privateFields.custodianCid
          if (cid) {
            if (cid.split(':').length > 1) {
              cid = cid.split(':')[0]
            }
            promisesFields.push(this.$store.$hashedPrivateApi.sharedViewByCID(cid))
          }
        })
      })
      const resolvedFields = await Promise.all(promisesFields)
      let counter = 0
      tmpApplicants.forEach((applicant, indexApplicant) => {
        applicant.fields = applicant.fields.map((file, index) => {
          const cid = resolvedFields[counter]?.custodianCid
          const displayName = resolvedFields[counter]?.name
          const description = resolvedFields[counter]?.description
          const payload = resolvedFields[counter]?.payload
          counter++
          return {
            description,
            displayName,
            payload,
            cid
          }
        })
        return applicant
      })
      return tmpApplicants
    }
  }
}
</script>
<style lang='styl'>

</style>
