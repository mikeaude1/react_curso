import PropTypes from 'prop-types';


export const FirstApp = ({title ="hola", subtitle ="hola 2"}) => {
    return (
        <>
       <h1>{title}</h1>
       <p>{subtitle}</p>
        </>
    )

}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}
