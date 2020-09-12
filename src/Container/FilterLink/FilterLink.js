import { connect } from "react-redux";
import { setVisibilityFilter } from "../../store/action/index";
import Link from "../../Component/Link/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.setVisibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCLick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
