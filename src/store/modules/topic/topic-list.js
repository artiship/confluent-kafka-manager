import {kafkaApi} from '@/api'
import * as TYPE from '@/store/actionType/topicType'

const state = {
  newsList: []
}

const getters = {
	newsList: state => state.newsList
}

const mutations = {
	[TYPE.NEWS_LIST_REQUEST] (state) {
	},
	[TYPE.NEWS_LIST_SUCCESS] (state, newslist) {
		state.newsList = newsList
	},
	[TYPE.NEWS_LIST_FAILURE] (state) {
	}
}

const actions = {
	getNewsList({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.NEWS_LIST_REQUEST)
		newsApi.list().then((response) => {
			rootState.requesting = false
			commit(TYPE.NEWS_LIST_SUCCESS, response.data)
		}, (error) => {
			rootState.requesting = false
			commit(TYPE.NEWS_LIST_FAILURE)
		})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
