import {kafkaApi} from '@/api'
import * as TYPE from '@/store/actionType/topicType'

const state = {
  topicList: []
}

const getters = {
	topicList: state => state.topicList
}

const mutations = {
	[TYPE.TOPIC_LIST_REQUEST] (state) {
	},
	[TYPE.TOPIC_LIST_SUCCESS] (state, topiclist) {
		state.topicList = topicList
	},
	[TYPE.TOPIC_LIST_FAILURE] (state) {
    state.topicList = []
	}
}

const actions = {
	getTopicList({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.TOPIC_LIST_REQUEST)

		kafkaApi.getTopics().then((response) => {
			rootState.requesting = false
			commit(TYPE.TOPIC_LIST_SUCCESS, response.data)
		}, (error) => {
			rootState.requesting = false
			commit(TYPE.TOPIC_LIST_FAILURE)
		})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
