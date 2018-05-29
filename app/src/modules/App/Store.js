import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as ass2medataReducer} from '../components/Dashboard/AssignedToMe/AssignedToMeReducer.js';
import {reducer as issueDetailPageReducer} from '../pages/IssueDetailPage/IssueDetailPageReducer.js';
import {reducer as issueCommentsReducer} from '../components/Issue/IssueComments/IssueCommentsReducer.js';
import {reducer as issueHistoryReducer} from '../components/Issue/IssueHistory/IssueHistoryReducer.js';
import {reducer as issueWatcherReducer} from '../components/Issue/IssueWatcher/IssueWatcherReducer.js';
import {reducer as projectReducer} from '../components/Project/ProjectReducer.js';
import {reducer as userReducer} from '../components/User/UserReducer.js';
import {reducer as issueListReducer} from '../components/Issue/IssueList/IssueListReducer.js';
import thunk from 'redux-thunk';

const allCombineReducer = combineReducers({
	ass2medata:ass2medataReducer,
	issuedata:issueDetailPageReducer,
	commentsdata:issueCommentsReducer,
	historiesdata:issueHistoryReducer,
	watchersdata:issueWatcherReducer,
	projectsdata:projectReducer,
	userdata:userReducer,
	issuelistdata:issueListReducer
})

//store
const store = createStore(allCombineReducer,applyMiddleware(thunk));

export default store;