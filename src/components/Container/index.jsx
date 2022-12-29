import P from 'prop-types';
import './styles.css';
export const Container = (props) => <section className="container">{props.children}</section>;
Container.propTypes = {
  props: P.any,
  children: P.node.isRequired,
};
