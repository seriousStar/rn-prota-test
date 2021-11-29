import { connect } from "react-redux";
import { home } from "../stores";

const mapStateToProps = (state) => ({
  nameListData: state.home.nameListData,
});

const mapDispatchToProps = {
  addName: home.actions.addName,
  fetchNameListData: home.actions.fetchNameListData,
};

export default connect(mapStateToProps, mapDispatchToProps);
