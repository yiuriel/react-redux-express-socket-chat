import { connect } from 'react-redux'
import ShowMessages from '../components/ShowMessages'

const mapStateToProps = (state) => ({
  messages: state.messages
})

const mapDispatchToProps = null

const MessagesView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowMessages)

export default MessagesView
