import { connect } from 'react-redux'
import ShowMessages from '../components/ShowMessages'

const mapStateToProps = (state) => ({
  messages: state.messages,
  user: state.user.user_name
})

const mapDispatchToProps = null

const MessagesView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowMessages)

export default MessagesView
